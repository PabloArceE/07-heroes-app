import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import queryString from "query-string";

import useForm from "../../hooks/useForm";
import getHeroesByName from "../../selectors/getHeroesByName";
import HeroCard from "../hero/HeroCard";

const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [values, handleInputChange, reset] = useForm({
    searchText: "",
  });

  const { searchText } = values;

  const filteredHeroes = useMemo(() => getHeroesByName(q), [q]);

  const hanldeSearch = (e) => {
    e.preventDefault(searchText);
    navigate(`?q=${searchText}`);
    reset();
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />

          <form>
            <input
              type="text"
              placeholder="Buscar un heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn btn-outline-primary mt-3"
              onClick={hanldeSearch}
            >
              Buscar
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          {q === "" ? (
            <div className="alert alert-info">Buscar heroes</div>
          ) : (
            filteredHeroes.length === 0 && (
              <div className="alert alert-danger">
                No se encontraron resultados
              </div>
            )
          )}

          {filteredHeroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchScreen;
