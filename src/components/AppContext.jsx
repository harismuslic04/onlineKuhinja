import { createContext, useEffect, useState } from "react";
import React from "react";

const AppContext = createContext(); // Kreiranje konteksta

function ContextProvider({ children }) {
  const [orderNum, setOrderNum] = useState(0);
  const [foodType, setFoodType] = useState("");
  const [order, setOrder] = useState([]);
  const [cena, setCena] = useState(0);
  const values = {
    orderNum,
    setOrderNum,
    foodType,
    setFoodType,
    order,
    setOrder,
    cena,
    setCena,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export { AppContext, ContextProvider };
