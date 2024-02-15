import React, { useContext, useEffect } from "react";
import { FlippingCard, FlippingCardBack, FlippingCardFront } from "react-ui-cards";
import { PokemonContext } from "../provider/PokemonContext";
import { useNavigate } from "react-router-dom";

const CustomCard = ({ data }) => {
  const { currentPokemon, setCurrentPokemon } = useContext(PokemonContext);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        setCurrentPokemon(data), navigate("/fight");
      }}
    >
      <FlippingCard>
        <FlippingCardFront>
          <div
            className={`flex flex-col justify-center items-center w-60 h-80 bg-card-bg-left bg-cover bg-center rounded-xl border-white border-solid border-8 ${
              !data ? `animate-pulse` : null
            }`}
          >
            <h2 className="font-pokemon font-bold text-4xl font-outline-2 text-yellow-300 ">{data?.name}</h2>
            <p></p>
            <img src={data?.image} alt="" className="w-40 h-40 rounded-lg my-4" />
          </div>
        </FlippingCardFront>
        <FlippingCardBack>
          <div className="flex flex-col justify-center items-center w-60 h-80 bg-card-bg-left bg-cover bg-center rounded-xl border-white border-solid border-8">
            <p>
              <span className="mr-2 font-semibold">HP:</span>
              {data?.hp}
            </p>
            <p>
              <span className="mr-2 font-semibold">Attack:</span>
              {data?.attack}
            </p>
            <p>
              <span className="mr-2 font-semibold">Defense:</span>
              {data?.defense}
            </p>
            <p>
              <span className="mr-2 font-semibold">Speed:</span>
              {data?.speed}
            </p>
            <p>
              <span className="mr-2 font-semibold">Type:</span>
              {data?.type}
            </p>
          </div>
        </FlippingCardBack>
      </FlippingCard>
    </div>
  );
};

export default CustomCard;
