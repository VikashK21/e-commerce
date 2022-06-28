import React, { createContext, useReducer } from "react";
import axios from "axios";

import AppReducer, { initialState, TYPES } from "./AppReducer";

export const GlobalContext = createContext(initialState);

function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function getProducts() {
    try {
      let res = await axios.get("http://localhost:3000/api/allpro");
      const result = res.data.result;
      dispatch({ type: TYPES.GETALL, payload: result });
    } catch (err) {
      dispatch({ type: TYPES.ERROR, payload: err.message });
    }
  }
  return (
    <GlobalContext.Provider value={{ Products: state.products, getProducts }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
