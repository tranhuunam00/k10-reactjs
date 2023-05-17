import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TimeAgo } from "./TimeAgo";
import { PostAuthor } from "./PostAuthor";
import { ReactionButtons } from "./ReactionButtons";
import { selectAllPosts, fetchPosts } from "./postsSlice";
import { useEffect } from "react";

export const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector((state) => state.posts.status);
  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  console.log(posts);
  const renderedPosts = orderedPosts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
      <Link to={`/edit-post/${post.id}`} className="button muted-button">
        Edit Post
      </Link>
      <TimeAgo timestamp={post.date} />
      <PostAuthor userId={post.user} />
      <ReactionButtons post={post} />
    </article>
  ));

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
