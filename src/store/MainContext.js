import React, { useState, useEffect, useContext, createContext } from "react";

import { setToken } from "../services/auth";

const MainContextProvider = createContext({});

export const MainContext = ({ children }) => {
  const [state, setState] = useState({
    user: {},
    token: "",
    refreshToken: "",
  });

  useEffect(() => {
    if (state.token) setToken(state.token);
  }, [state]);

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
