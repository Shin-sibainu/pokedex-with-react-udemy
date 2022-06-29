import React from "react";

const Card = ({ pokemon }) => {
  return (
    <div className="Card">
      <div className="CardImg">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <div className="CardName">{pokemon.name}</div>
      <div className="CardTypes">
        {pokemon.types.map((type) => {
          return <div className="CardType">{type.type.name}</div>;
        })}
      </div>
      <div className="CardInfo">
        <div className="CardData CardDataWeight">
          <p className="title">重さ</p>
          <p>{pokemon.weight}</p>
        </div>
        <div className="CardData CardDataHeight">
          <p className="title">高さ</p>
          <p>{pokemon.height}</p>
        </div>
        <div className="CardData CardDataAbility">
          <p className="title">アビリティ</p>
          <p>{pokemon.abilities[0].ability.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
