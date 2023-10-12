import { createContext } from "react";
import { useParams } from "react-router-dom";
import useAPI from "../hooks/useAPI";
import {
  EXT_TYPE,
  PRODUCT_INFO_COMMENTS_URL,
  PRODUCT_INFO_URL,
} from "../utils/urls";
import { useState } from "react";

export const ProductContext = createContext();

/* const useAPIwithCompleteURL = ({ urlParams, initialState }) => {
  const [completeURL = ""] = useCompleteURL({
    params: urlParams,
  });

  const [data = initialState, isLoading] = useAPI({
    apiURL: completeURL,
    initialState: initialState,
  });
  return [data, isLoading];
}; */

export function ProductProvider({ children }) {
  const { id } = useParams();

  const [producto, isLoadingProducto, errorProducto] = useAPI({
    apiURL: `${PRODUCT_INFO_URL}${id}${EXT_TYPE}`,
    initialState: {},
  });
  const [comentarios, isLoadingComentarios] = useAPI({
    apiURL: `${PRODUCT_INFO_COMMENTS_URL}${id}${EXT_TYPE}`,
    initialState: [],
  });
  const [comentariosUsuario, setComentariosUsuario] = useState([]);
  return (
    <ProductContext.Provider
      value={{
        producto,
        isLoadingProducto,
        comentarios,
        isLoadingComentarios,
        comentariosUsuario,
        setComentariosUsuario,
        errorProducto,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
