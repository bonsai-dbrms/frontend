import React, { createContext, useReducer } from "react";
import { initialState,initialStateName } from "./formStore";
import { formReducer,nameReducer } from "./formReducer";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

export const NameContext = createContext();

export const NameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(nameReducer, initialStateName);
  return (
    <NameContext.Provider value={{ state, dispatch }}>
      {children}
    </NameContext.Provider>
  );
};