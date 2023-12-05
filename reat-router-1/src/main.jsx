import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Home from "./components/Home/Home.jsx";
import Info from "./components/Info/Info.jsx";
import Friends from "./components/Friends/Friends.jsx";
import FriendDetail from "./components/FriendDetail/FriendDetail.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/app",
        element: <App></App>,
      },
      {
        path: "/friends",
        element: <Friends></Friends>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "/friends/:friendID",
        element: <FriendDetail></FriendDetail>,
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/users/${params.friendID}`
          ),
      },
      {
        path: "/info",
        element: <Info></Info>,
        children: [
          {
            path: "/info/about",
            element: <About></About>,
          },
          {
            path: "/info/contact",
            element: <Contact></Contact>,
          },
          {
            path: "*",
            element: <ErrorPage></ErrorPage>,
          },
          {
            path: "*",
            element: <ErrorPage></ErrorPage>,
          },
        ],
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
