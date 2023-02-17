import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  console.log(cocktails);

  if (loading) {
    return <Loading></Loading>;
  }

  if (cocktails.lenght < 1) {
    //console.log("Lenght is less than 1");
    return (
      <section className="section">
        <h2 className="section-title">
          No Cocktails matched your search criteria
        </h2>
      </section>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((drink) => {
          return <Cocktail key={drink.id} {...drink}></Cocktail>;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
