import React, { createContext, useReducer } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const initialState = {
    healthData: [],
    firstLoad: true,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "reset":
        return initialState;
      case "removeLastEntry":
        return Object.assign({}, state, {
           healthData: [...state.healthData].pop(),
        });
      case "addToHealthData":
        return Object.assign({}, state, {
          healthData: [...state.healthData, action.payload],
        });
      case "setFirstLoadFalse":
        return Object.assign({}, state, {
          firstLoad: false,
        });
      default:
        console.log("hit default case in reducer");
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
