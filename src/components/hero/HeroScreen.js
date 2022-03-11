import { Navigate, useParams } from "react-router-dom";
import getHeroById from "../../selectors/getHeroeById";

const HeroScreen = () => {
  const { heroId } = useParams();

  const hero = getHeroById(heroId);

  if(!hero) {
      return <Navigate to='/' />
  } 

  return (
    <>
      <h1>Hero Screen</h1>
      <p>{hero.superhero}</p>
    </>
  );
};

export default HeroScreen;
