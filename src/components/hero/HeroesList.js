import { useMemo } from "react";
import getHeroesByPublisher from "../../selectors/getHeroesByPublisher";
import HeroCard from "./HeroCard";

export const HeroesList = ({ publisher }) => {
  const heroesList = useMemo(
    () => getHeroesByPublisher(publisher),
    [publisher]
  );

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroesList.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};

export default HeroesList;
