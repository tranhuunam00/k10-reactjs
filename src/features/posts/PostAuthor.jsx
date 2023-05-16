/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";

export const PostAuthor = ({ userId }) => {
  console.log(userId);
  const author = useSelector((state) => {
    console.log(state.users);
    return state.users.find((user) => user.id === userId);
  });

  return <span>by {author ? author.name : "Unknown author"}</span>;
};
