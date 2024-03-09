import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroesById } from "../helpers/getHeroesById";
import { useMemo } from "react";

const HeroPage = () => {
  const navigate = useNavigate();
  const { heroId } = useParams();
  // console.log(heroId, );
  const hero = useMemo(() => getHeroesById(heroId), [heroId]);
  // console.log(hero);

  const onReturn = () => {
    navigate(-1);
  };

  // no pasar de aqui
  if (!hero) {
    return <Navigate to={"/marvel"} />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${heroId}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group list-item">
            {" "}
            <b>Alter Ego: {hero.alter_ego}</b>
          </li>
          <li className="list-group list-item">
            {" "}
            <b>Publisher: {hero.publisher}</b>
          </li>
          <li className="list-group list-item">
            {" "}
            <b>First Appearance:{hero.first_appearance}</b>
          </li>
        </ul>
        <h5 className="mt-3"> Characters:{hero.characters}</h5>
        <button onClick={onReturn} className="btn btn-outline-primary">
          Go Back...
        </button>
      </div>
    </div>
  );
};

export default HeroPage;
