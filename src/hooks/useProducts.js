import useAPI from "./useAPI";

function useProducts({ apiURL }) {
  const [productos, isLoading, error] = useAPI({
    apiURL: apiURL,
    initialState: {},
  });

  const productosArray = productos?.products || [];

  return {
    productos,
    isLoading,
    error,
    productosArray,
  };
}

export default useProducts;
