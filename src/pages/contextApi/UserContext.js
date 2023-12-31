import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("email"));

  if (localStorage.getItem("emall") !== "") {
  }

  const authInfo = { user, setUser };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
