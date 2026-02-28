
import { createContext, useReducer, useEffect } from "react";
import { getFromStorage, saveToStorage } from "../utils/storage";
import { canTransition } from "../utils/lifecycle";

export const ContractContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD":
      return action.payload;

    case "ADD_CONTRACT":
      return [...state, action.payload];

    case "UPDATE_STATUS":
      return state.map((contract) => {
        if (contract.id === action.payload.id) {
          if (
            canTransition(contract.status, action.payload.status)
          ) {
            return { ...contract, status: action.payload.status };
          }
        }
        return contract;
      });

    case "UPDATE_VALUES":
      return state.map((contract) =>
        contract.id === action.payload.id
          ? { ...contract, values: action.payload.values }
          : contract
      );

    default:
      return state;
  }
};

export const ContractProvider = ({ children }) => {
  const [contracts, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    dispatch({
      type: "LOAD",
      payload: getFromStorage("contracts"),
    });
  }, []);

  useEffect(() => {
    saveToStorage("contracts", contracts);
  }, [contracts]);

  return (
    <ContractContext.Provider value={{ contracts, dispatch }}>
      {children}
    </ContractContext.Provider>
  );
};
