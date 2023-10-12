import { useContext } from "react";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import SpinnerCentrado from "../SpinnerCentrado";
import CardPersonalizada from "../General/Cards";

let Categorias = () => {
  const { categorias, filters, order, isLoading, opciones } =
    useContext(CategoriesContext);

  return (
    <section className="grid-cards-container">
      {isLoading && <SpinnerCentrado />}

      {categorias
        .filter((cat) => {
          const { min, max } = filters;
          const cantidad = parseInt(cat.productCount);
          return cantidad >= min && cantidad <= max;
        })
        .sort(opciones[order])
        .map(({ id, name, imgSrc, description, productCount }) => {
          return (
            <article className="categorie" key={`${name}_${id}`}>
              <CardPersonalizada
                to={`${id}`}
                name={name}
                imgSrc={`/${imgSrc}`}
                description={description}
                productCount={productCount}
              />
            </article>
          );
        })}
    </section>
  );
};

export default Categorias;
