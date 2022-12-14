import { createContext, useContext, useReducer } from "react";
import { toast } from "react-hot-toast";

// Prepares the datalayer
export const StateContext = createContext();

// Wrap our app and provide  the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the datalayer
export const useStateValue = () => useContext(StateContext);
