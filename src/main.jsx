import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import ErrorPage from "./error-page";
import Contact, { loader as contactLoader } from "./routes/contact";
import EditContact, { action as editAction } from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";
import Index from "./routes";
import store from "./app/store";
import { Provider } from "react-redux";
import { Counter } from "./features/counter/counter";
import { PostsList } from "./features/posts/PostsList";
import { AddPostForm } from "./features/posts/AddPostForm";
import { SinglePostPage } from "./features/posts/SinglePostPage";
import { EditPostForm } from "./features/posts/EditPostForm";
import { worker } from "./api/server";
import { fetchUsers } from "./features/users/usersSlice";
import { UsersList } from "./features/users/UsersList";
import { UserPage } from "./features/users/UserPage";
import { NotificationsList } from "./features/notifications/NotificationsList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },

          {
            path: "notifications",
            element: <NotificationsList />,
          },
          {
            path: "users",
            element: <UsersList />,
          },
          { path: "users/:userId", element: <UserPage /> },
          {
            path: "counter",
            element: <Counter />,
          },
          {
            path: "posts/",
            element: <PostsList />,
          },

          {
            path: "posts/edit",
            element: <AddPostForm />,
          },
          {
            path: "edit-post/:postId",
            element: <EditPostForm />,
          },
          {
            path: "posts/:postId",
            element: <SinglePostPage />,
          },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
          },
        ],
      },
    ],
  },
]);
async function render() {
  await worker.start();
  store.dispatch(fetchUsers());
  ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </Provider>
  );
}

render();
