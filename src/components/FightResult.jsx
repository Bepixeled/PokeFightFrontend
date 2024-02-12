import React from "react";

const FightResult = ({ winner }) => (
  <div className="text-center font-roboto bg-poke-bg bg-no-repeat bg-cover">
    <div className="flex justify-center items-center h-screen ">      
        <h1 className="text-4xl lg:text-6xl font-bold text-yellow-300 font-outline-2 font-pokemon ">
          {winner ? `${winner} wins!` : "Fight"}
        </h1>      
    </div>
  </div>
);

export default FightResult;
