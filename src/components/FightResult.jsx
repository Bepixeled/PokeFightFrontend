import React from "react";

const FightResult = ({ winner }) => (
  <div className="text-center font-roboto bg-poke-bg bg-no-repeat bg-cover">
    <div className="flex justify-center items-center h-screen flex-col space-y-8">      
        <h1 className="text-4xl lg:text-6xl font-bold text-yellow-300 font-outline-2 font-pokemon ">
          {winner ? `${winner} wins!` : "Fight"}
        </h1>
        <a href="/"><div className="bg-fight-btn bg-contain h-48 w-48">
      <button className="h-48 w-48" >
        Fight again
        
      </button>
    </div></a>     
    </div>
  </div>
);

export default FightResult;
