import { createContext, useState } from "react";
import { useParams } from "react-router-dom";
import { EXT_TYPE, PRODUCTS_URL } from "../utils/urls";
import useProducts from "../hooks/useProducts";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const { id } = useParams();

  const productsURL = `${PRODUCTS_URL}${id}${EXT_TYPE}`;

  const { productos, isLoading, productosArray, error } = useProducts({
    apiURL: productsURL,
  });
  const [filters, setFilters] = useState({
    busqueda: "",
    min: 0,
    max: Infinity,
  });
  const [order, setOrder] = useState("");

  const opciones = {
    dsc: function (a, b) {
      return -(a.cost - b.cost);
    },
    asc: function (a, b) {
      return a.cost - b.cost;
    },
    rel: function (a, b) {
      return -(a.soldCount - b.soldCount);
    },
  };

  return (
    <ProductsContext.Provider
      value={{
        productos,
        isLoading,
        productosArray,
        error,
        filters,
        setFilters,
        order,
        setOrder,
        opciones,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
