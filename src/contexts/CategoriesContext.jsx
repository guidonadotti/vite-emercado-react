import { createContext, useState } from "react";

import { useContext } from "react";
import { LoginContext } from "./LoginContext";
import { useEffect } from "react";
import { CATEGORIES_URL } from "../utils/urls";
import { useMemo } from "react";

export const CategoriesContext = createContext();

export function CategoriesProvider({ children }) {
  const [filters, setFilters] = useState({
    min: 0,
    max: Infinity,
  });
  const [order, setOrder] = useState("");

  const { categoriasAPI, setCatsURL } = useContext(LoginContext);
  useEffect(() => {
    if (categoriasAPI[0].length === 0) setCatsURL(CATEGORIES_URL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [categorias, isLoading] = categoriasAPI;

  const opciones = useMemo(() => {
    return {
      az: function (a, b) {
        return a.name.localeCompare(b.name);
      },
      za: function (a, b) {
        return b.name.localeCompare(a.name);
      },
      dsc: function (a, b) {
        let [aCount, bCount] = [a, b].map((elemento) =>
          parseInt(elemento.productCount)
        );
        return bCount - aCount;
      },
    };
  }, []);

  return (
    <CategoriesContext.Provider
      value={{
        filters,
        setFilters,
        order,
        setOrder,
        opciones,
        categorias,
        isLoading,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}
