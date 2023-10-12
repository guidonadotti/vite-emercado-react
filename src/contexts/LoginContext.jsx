import { createContext } from "react";
import useActiveUser from "../hooks/useActiveUser";
import useUsers from "../hooks/useUsers";
import { useState } from "react";
import useAPI from "../hooks/useAPI";

export const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [catsURL, setCatsURL] = useState();
  const categoriasAPI = useAPI({ apiURL: catsURL, initialState: [] });
  console.log(categoriasAPI);

  return (
    <LoginContext.Provider
      value={{
        ...useActiveUser(),
        ...useUsers(),
        catsURL,
        setCatsURL,
        categoriasAPI,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
