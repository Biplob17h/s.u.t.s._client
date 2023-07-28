import React, { useContext } from "react";
import { AuthContext } from "../pages/contextApi/UserContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  // contex api
  const { user } = useContext(AuthContext);

//   function
const location = useLocation();


  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default PrivateRoutes;
