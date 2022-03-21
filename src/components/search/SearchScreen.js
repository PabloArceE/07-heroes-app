import { useState } from "react";
import useForm from "../../hooks/useForm";
import getHeroesByName from "../../selectors/getHeroesByName";
import HeroCard from "../hero/HeroCard";

const SearchScreen = () => {
  const [values, handleInputChange, reset] = useForm({
    searchText: "",
  });

  const { searchText } = values;

  const [filterHeroes, setfilterHeroes] = useState('init')

  const filteredHeroes = getHeroesByName(filterHeroes);

  const hanldeSearch = (e) => {
    e.preventDefault(searchText);
    // console.log(searchText);
    // console.log(filteredHeroes);
    setfilterHeroes(searchText)
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

          {filteredHeroes !== [] && filteredHeroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchScreen;
