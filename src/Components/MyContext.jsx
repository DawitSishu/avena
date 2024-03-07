import React, { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [lan, handleLan] = useState({
    loggedIn: false,
    token: "",
    user: true,
  });

  return (
    <MyContext.Provider value={{ lan, handleLan }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
