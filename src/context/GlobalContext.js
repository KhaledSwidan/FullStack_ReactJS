import { createContext, useContext, useReducer } from "react";
import { AppReducer, initialState } from "./AppReducer";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) =>
{
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        basket: state.basket,
        user: state.user,
        dispatch: dispatch
      }}>
      {children}
    </GlobalContext.Provider>
  )
};

export const useAuth = () => useContext(GlobalContext);