import {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";
import { LoginContext } from "./LoginContext";
import { CATEGORIES_URL } from "../utils/urls";

export const SellContext = createContext();

export function SellProvider({ children }) {
  const [costo, setCosto] = useState(0);
  const [moneda, setMoneda] = useState("UYU");
  const costoInput = {
    value: costo,
    onChange: function (e) {
      setCosto(e.target.value);
    },
  };
  const monedaInput = {
    value: moneda,
    onChange: function (e) {
      setMoneda(e.target.value);
    },
  };

  const [publicacionChecked, setPublicacionChecked] = useState(0);
  const tipoDePublicacionInput = { publicacionChecked, setPublicacionChecked };

  function formatearComoPorcentaje(numero = 0, idioma = "es-UY") {
    // Opciones de formato para porcentaje
    const opcionesDeFormato = {
      style: "percent", // Indica que quieres representarlo como un porcentaje
      minimumFractionDigits: 2, // Define la cantidad mínima de decimales
      maximumFractionDigits: 2, // Define la cantidad máxima de decimales
    };

    // Crea un objeto NumberFormat con las opciones de formato y el idioma
    const formateadorDePorcentaje = new Intl.NumberFormat(
      idioma,
      opcionesDeFormato
    );

    // Formatea el número como porcentaje y devuelve el resultado
    return formateadorDePorcentaje.format(numero);
  }
  function formatearComoMoneda(numero = 0, moneda = "UYU") {
    return new Intl.NumberFormat("es-UY", {
      style: "currency",
      currency: moneda,
    }).format(numero);
  }
  const formateadores = { formatearComoMoneda, formatearComoPorcentaje };

  const { categoriasAPI, setCatsURL } = useContext(LoginContext);
  useEffect(() => {
    if (categoriasAPI[0].length === 0) setCatsURL(CATEGORIES_URL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const resetForm = useCallback((form) => {
    tipoDePublicacionInput.setPublicacionChecked(0);
    setCosto(0);
    setMoneda("UYU");

    form.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SellContext.Provider
      value={{
        costoInput,
        monedaInput,
        tipoDePublicacionInput,
        formateadores,
        categoriasAPI,
        resetForm,
      }}
    >
      {children}
    </SellContext.Provider>
  );
}
