import React, { useState } from "react";

const FightLogic = ({ userPokemon, opponentPokemon, onFightFinish }) => {
  const [winner, setWinner] = useState("");

  const handleFight = () => {
    
    if (userPokemon.hp > opponentPokemon.hp) {
      setWinner(userPokemon.name);
    } else if (userPokemon.hp < opponentPokemon.hp) {
      setWinner(opponentPokemon.name);
    } else {
      setWinner("It's a draw!");
    }

    
    onFightFinish(winner);
  };

  return (
    <div>
      <button onClick={handleFight}>Fight</button>
    </div>
  );
};

export default FightLogic;