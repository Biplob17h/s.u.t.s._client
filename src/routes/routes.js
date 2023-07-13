import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Shop from "../pages/shop/Shop";
import About from "../pages/About/About/About";
import TeacherDetails from "../pages/About/TeacherDetails/TeacherDetails";

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
        path:'/about',
        element:<About></About>
      },
      {
        path:'/teacherdetails',
        element:<TeacherDetails></TeacherDetails>,
      }
    ],
  },
]);
