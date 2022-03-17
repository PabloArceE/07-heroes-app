import useForm from "../../hooks/useForm";

const SearchScreen = () => {
  const [values, handleInputChange, reset] = useForm({
    searchText: "",
  });
  const { searchText } = values;
  const hanldeSearch = (e) => {
    e.preventDefault(searchText);
    console.log(searchText)
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
      </div>
    </>
  );
};

export default SearchScreen;
