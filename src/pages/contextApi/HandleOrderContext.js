import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./UserContext";

export const OrderContext = createContext();

const HandleOrderContext = ({ children }) => {
  // context api
  const { user } = useContext(AuthContext);
  
  // all seate
  const [order, setOrder] = useState([]);
  const [orderLength, setOrderLength] = useState(0);

  //   use effect
  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/order?email=${user}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [user, orderLength]);

  const OrderValue = { order, orderLength, setOrderLength };

  return (
    <OrderContext.Provider value={OrderValue}>{children}</OrderContext.Provider>
  );
};

export default HandleOrderContext;
