
import { createContext, useReducer, useEffect } from "react";
import { getFromStorage, saveToStorage } from "../utils/storage";

export const BlueprintContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD":
      return action.payload;
    case "ADD_BLUEPRINT":
      return [...state, action.payload];
    default:
      return state;
  }
};

export const BlueprintProvider = ({ children }) => {
  const [blueprints, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    dispatch({
      type: "LOAD",
      payload: getFromStorage("blueprints"),
    });
  }, []);

  useEffect(() => {
    saveToStorage("blueprints", blueprints);
  }, [blueprints]);

  return (
    <BlueprintContext.Provider value={{ blueprints, dispatch }}>
      {children}
    </BlueprintContext.Provider>
  );
};
