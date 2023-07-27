import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Shop from "../pages/shop/Shop";
import About from "../pages/About/About/About";
import CourseSingle from "../pages/Shared/CourseSingle/CourseSingle";
import Blog from "../pages/Shared/Navbar/Blog/blogPage";
import BlogForm from "../pages/Shared/Navbar/Blog/blogForm";
import TeacherDetails from "../pages/About/TeacherDetails/TeacherDetails";
import News from "../pages/News/News/News";
import Events from "../pages/Events/Events/Events";
import Cart from "../pages/cart/Cart";
import Confirm from "../pages/cart/Confirm/Confirm";
import ProfileLayout from "../layout/ProfileLayout";
import Profile from "../pages/Profile/Profile";
import TeacherSingle from "../pages/About/TeacherDetails/TeacherSingle";
import Register from "../pages/Authentication/Register/Register";
import Login from "../pages/Authentication/Login/Login";

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
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/news",
        element: <News></News>,
      },
      {
        path: "/about/teachers",
        element: <TeacherDetails></TeacherDetails>,
      },
      {
        path: "events",
        element: <Events></Events>,
      },
      {
        path: "/blog-form",
        element: <BlogForm></BlogForm>,
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/course/single/:id",
        element: <CourseSingle></CourseSingle>,
        loader: ({ params }) =>
          fetch(
            `https://suts-server-sable.vercel.app/api/v1/courses/${params.id}`
          ),
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/confirm",
        element: <Confirm></Confirm>,
      },
      {
        path: "/about/teachers/:id",
        element: <TeacherSingle></TeacherSingle>,
        loader: (params) => fetch(`teachers.json`),
      },
    ],
  },
  {
    path: "/profile",
    element: <ProfileLayout></ProfileLayout>,
    children: [
      {
        path: "/profile/main",
        element: <Profile></Profile>,
      },
    ],
  },
]);
