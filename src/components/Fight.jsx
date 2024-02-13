import React, { useState, useEffect, useContext } from "react";
import PokemonFightCard from "./PokemonFightCard";
import FightButton from "./FightButton";
import FightResult from "./FightResult";
import { PokemonContext } from "../provider/PokemonContext";

const Fight = () => {
  const { currentPokemon, setCurrentPokemon } = useContext(PokemonContext);
  const [pokemon1, setPokemon1] = useState(currentPokemon);
  const [pokemon2, setPokemon2] = useState("");
  const [userPokemon, setUserPokemon] = useState({});
  const [opponentPokemon, setOpponentPokemon] = useState({});
  const [winner, setWinner] = useState(null);
 
console.log(pokemon1);
  useEffect(() => {
    const fetchPokemonData = async (pokemonName, setUserPokemon) => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        if (!response.ok) {
          console.error(`Failed to fetch ${pokemon1} data`);
          return;
        }

        const data = await response.json();
        const imageUrl = data.sprites?.other?.home?.front_default;

        setUserPokemon({
          name: data.name,
          imageUrl,
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          speed: data.stats[5].base_stat,
          type: data.types[0].type.name,
        });
      } catch (error) {
        console.error(`Error fetching ${pokemon1} data:`, error);
      }
    };

    const fetchOpponentPokemon = async () => {
      try {
        const randomPokemonId = Math.floor(Math.random() * 898) + 1;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`);

        if (!response.ok) {
          console.error("Failed to fetch opponent Pokemon data");
          return;
        }

        const data = await response.json();
        console.log(data);
        const imageUrl = data.sprites?.other?.home?.front_default;

        setOpponentPokemon({
          name: data.name,
          imageUrl,
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          speed: data.stats[5].base_stat,
          type: data.types[0].type.name,
        });
      } catch (error) {
        console.error("Error fetching opponent Pokemon data:", error);
      }
    };

    // Fetch Pokemon Daten
    fetchPokemonData(pokemon1.name, setUserPokemon);
    fetchOpponentPokemon();
  }, [pokemon1]);

  const handleFight = () => {
    
    if (opponentPokemon.name) {
      
      // Zu Testzwecken gewinnt das Pokemon mit höhrer HP

      if (userPokemon.hp > opponentPokemon.hp) {
        setWinner(userPokemon.name);
      } else if (userPokemon.hp < opponentPokemon.hp) {
        setWinner(opponentPokemon.name);
      } else {
        setWinner("It's a draw!");
      }
    }
  };

  return (
    <div className="bg-poke-bg bg-cover h-screen">
      {winner !== null ? (
        <FightResult winner={winner} />
      ) : (
        <div className="text-center font-roboto bg-poke-bg bg-no-repeat bg-cover">
          <h1 className="text-4xl lg:text-6xl font-bold text-yellow-300 font-outline-2 font-pokemon ">
            Fight
          </h1>
          <div className="flex flex-col lg:flex-row justify-around items-center mt-24">
            <PokemonFightCard {...userPokemon} />
            <FightButton onClick={handleFight} />
            <PokemonFightCard {...opponentPokemon} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Fight;