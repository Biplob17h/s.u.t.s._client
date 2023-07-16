import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Shop from "../pages/shop/Shop";

import Register from "../pages/Authentication/Register/Register";
import CourseSingle from "../pages/Shared/CourseSingle/CourseSingle";
import Login from "../pages/Authentication/Login/Login";
import Blog from "../pages/Shared/Navbar/Blog/blogPage";
import BlogForm from "../pages/Shared/Navbar/Blog/blogForm";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/blog-form",
        element: <BlogForm></BlogForm>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/course/single/:id",
        element: <CourseSingle></CourseSingle>,
        loader: ({ params }) =>
          fetch(`http://localhost:8080/api/v1/courses/${params.id}`),
      },
    ],
  },
]);
