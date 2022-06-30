import React from "react";
import "./Card.css";

const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <h3 className="cardName">{pokemon.name}</h3>
      <div className="cardTypes">
        <div className="typeName">タイプ：</div>
        {pokemon.types.map((type) => {
          return (
            <>
              <div className="cardType">{type.type.name}</div>
            </>
          );
        })}
      </div>
      <div className="cardInfo">
        <div className="cardData cardDataWeight">
          <p className="title">重さ：</p>
          <p>{pokemon.weight}</p>
        </div>
        <div className="cardData cardDataHeight">
          <p className="title">高さ：</p>
          <p>{pokemon.height}</p>
        </div>
        <div className="cardData cardDataAbility">
          <p className="title">アビリティ：</p>
          <p>{pokemon.abilities[0].ability.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
