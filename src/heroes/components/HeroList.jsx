import getHeroesByPublisher from "../../heroes/helpers/getHeroesByPublisher";
import React, { useMemo } from "react";
import HeroCard from "./HeroCard";

export const HeroList = React.memo(({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <>
      <h1 className="animate__bounceInLeft">Lista de Heroes</h1>
      <div className="row row-cols-1 row-cols-md-3 g-3">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </>
  );
});
export default HeroList;
