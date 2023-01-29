
import { createContext, useContext } from "react";

export const AuthContext = createContext({
  user: undefined,
  isLoading: false,
  setUser: (user: React.SetStateAction<undefined>) => {},
});

export const useAuthContext = () => useContext(AuthContext);