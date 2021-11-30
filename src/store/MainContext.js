import React, { useState, useContext, createContext } from "react";

const MainContextProvider = createContext({});

export const MainContext = ({ children }) => {
  const [state, setState] = useState({
    user: {},
    token: "",
    refreshToken: "",
  });

  return (
    <MainContextProvider.Provider value={{ state, setState }}>
      {children}
    </MainContextProvider.Provider>
  );
};

export function useMainContext() {
  const context = useContext(MainContextProvider);

  if (!context)
    throw new Error(
      "useMainContext must be used within an MainContextProvider"
    );

  const { state, setState } = context;

  return {
    state,
    setState,
  };
}
