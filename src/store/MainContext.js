import React, { useState, useEffect, useContext, createContext } from "react";

import {
  setToken,
  setUser,
  getToken,
  getUserFromLocalStorage,
} from "../services/auth";

const MainContextProvider = createContext({});

export const INITIAL_STATE = {
  user: {},
  token: "",
  refreshToken: "",
  loading: true,
};

export const MainContext = ({ children }) => {
  const [state, setState] = useState(INITIAL_STATE);
  const hasToken = getToken();
  const hasUser = getUserFromLocalStorage();

  useEffect(() => {
    if (hasToken && hasUser) {
      setState((prev) => ({
        ...prev,
        token: hasToken,
        user: hasUser,
        loading: false,
      }));
    } else {
      setState((prev) => ({
        ...prev,
        loading: false,
      }));
    }
  }, []);

  useEffect(() => {
    if (state.token) {
      setToken(state.token);
      setUser(state.user);
    }
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
