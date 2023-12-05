import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Home from "./components/Home/Home.jsx";
import Info from "./components/Info/Info.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/app",
    element: <App></App>,
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// children: [
// {
//   path: "info",
//   element: <Info></Info>,
//   children: [
//     {
//       path: "info/about",
//       element: <About></About>,
//     },
//     {
//       path: "info/contact",
//       element: <Contact></Contact>,
//     },
//   ],
// },
// {
//   path: "app",
//   element: <App></App>,
// },
// ],
