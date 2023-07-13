import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Shop from "../pages/shop/Shop";
import Blog from "../pages/Blog/blogPage";
import BlogForm from "../pages/Blog/blogForm"
import Register from "../pages/Authentication/Register/Register";

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
        element: <Blog></Blog>
      },
      {
        path: "/blog-form",
        element: <BlogForm></BlogForm>
      },
      {
        path : "/register",
        element : <Register></Register>
      }
    ],
  },
]);
