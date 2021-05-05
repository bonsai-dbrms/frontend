import React, { createContext, useReducer } from "react";
import { initialState } from "./formStore";
import { formReducer } from "./formReducer";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};