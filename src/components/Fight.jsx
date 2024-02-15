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
  const [winnderId, setWinnerId] = useState(null);
  const [loserId, setLoserId] = useState(null);

  useEffect(() => {
    const imageUrl = currentPokemon.image; // Assuming the image is directly available in currentPokemon
    setUserPokemon({
      id: currentPokemon.id,
      name: currentPokemon.name,
      imageUrl,
      hp: currentPokemon.hp,
      attack: currentPokemon.attack,
      defense: currentPokemon.defense,
      speed: currentPokemon.speed,
      type: currentPokemon.type,
    });

    console.log("currentPokemonID", currentPokemon.id);

    const fetchOpponentPokemon = async () => {
      try {
        const randomPokemonId = Math.floor(Math.random() * 898) + 1;
        const response = await fetch(
          `https://pokefightapi-bq3z.onrender.com/pokemon/${randomPokemonId}`
        );

        if (!response.ok) {
          console.error("Failed to fetch opponent Pokemon data");
          return;
        }

        const data = await response.json();
        console.log(data);
        const imageUrl = data.sprites.other.dream_world.front_default;

        setOpponentPokemon({
          id: data.id,
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

    fetchOpponentPokemon();
  }, [pokemon1]);
  console.log("opponentPokemonID", opponentPokemon.id);

  const handleFight = () => {

    if (!opponentPokemon || Object.keys(opponentPokemon).length === 0) {
      console.error("Opponent Pokemon data is not available.");
      return;
    }

    const typeChart = {
      fire: {
        fire: 0.5,
        water: 0.5,
        grass: 2,
        ice: 2,
        bug: 2,
        rock: 0.5,
        dragon: 0.5,
        steel: 2,
      },
      water: {
        fire: 2,
        water: 0.5,
        grass: 0.5,
        ground: 2,
        rock: 2,
        dragon: 0.5,
      },
      grass: {
        fire: 0.5,
        water: 2,
        grass: 0.5,
        poison: 0.5,
        ground: 2,
        flying: 0.5,
        bug: 0.5,
        rock: 2,
        dragon: 0.5,
        steel: 0.5,
      },
      electric: {
        water: 2,
        electric: 0.5,
        grass: 0.5,
        ground: 0,
        flying: 2,
        dragon: 0.5,
      },
      ice: {
        fire: 0.5,
        water: 0.5,
        grass: 2,
        ice: 0.5,
        ground: 2,
        flying: 2,
        dragon: 2,
        steel: 0.5,
      },
      fighting: {
        normal: 2,
        ice: 2,
        poison: 0.5,
        flying: 0.5,
        psychic: 0.5,
        bug: 0.5,
        rock: 2,
        ghost: 0,
        steel: 2,
        fairy: 0.5,
      },
      poison: {
        grass: 2,
        poison: 0.5,
        ground: 0.5,
        rock: 0.5,
        ghost: 0.5,
        steel: 0,
        fairy: 2,
      },
      ground: {
        fire: 2,
        electric: 2,
        grass: 0.5,
        poison: 2,
        flying: 0,
        bug: 0.5,
        rock: 2,
        steel: 2,
      },
      flying: {
        electric: 0.5,
        grass: 2,
        fighting: 2,
        bug: 2,
        rock: 0.5,
        steel: 0.5,
      },
      psychic: {
        fighting: 2,
        poison: 2,
        psychic: 0.5,
        dark: 0,
        steel: 0.5,
      },
      bug: {
        fire: 0.5,
        grass: 2,
        fighting: 0.5,
        ground: 0.5,
        flying: 0.5,
        rock: 2,
        steel: 0.5,
        fairy: 0.5,
      },
      rock: {
        fire: 2,
        ice: 2,
        fighting: 0.5,
        ground: 0.5,
        flying: 2,
        bug: 2,
        steel: 0.5,
      },
      ghost: {
        normal: 0,
        psychic: 2,
        ghost: 2,
        dark: 0.5,
      },
      dragon: {
        dragon: 2,
        steel: 0.5,
        fairy: 0,
      },
      dark: {
        fighting: 2,
        psychic: 2,
        ghost: 2,
        dark: 0.5,
        fairy: 0.5,
      },
      steel: {
        fire: 0.5,
        water: 0.5,
        electric: 0.5,
        ice: 2,
        rock: 2,
        steel: 0.5,
        fairy: 2,
      },
      fairy: {
        fire: 0.5,
        fighting: 2,
        poison: 0.5,
        dragon: 2,
        dark: 2,
        steel: 0.5,
      },
      normal: {
        fighting: 2,
        ghost: 0,
      },
    };

    const userAttack = currentPokemon.attack;
    const userDefense = currentPokemon.defense;
    const userSpeed = currentPokemon.speed;
    const userType = currentPokemon.type;
    const opponentAttack = opponentPokemon.attack;
    const opponentDefense = opponentPokemon.defense;
    const opponentSpeed = opponentPokemon.speed;
    const opponentType = opponentPokemon.type;

    const userAttackPower = userAttack - opponentDefense;
    const opponentAttackPower = opponentAttack - userDefense;

    const userSpeedPower = userSpeed - opponentSpeed;
    const opponentSpeedPower = opponentSpeed - userSpeed;

    const userTypePower = typeChart[userType][opponentType];
    const opponentTypePower = typeChart[opponentType][userType];

    const userTotalPower = userAttackPower + (userSpeedPower * userTypePower) ;
    const opponentTotalPower = opponentAttackPower + (opponentSpeedPower * opponentTypePower) ;

     if (userTotalPower > opponentTotalPower) {
      setWinner(userPokemon.name);
      setWinnerId(userPokemon.id);
      setLoserId(opponentPokemon.id);
    } else {
      setWinner(opponentPokemon.name);
      setWinnerId(opponentPokemon.id);
      setLoserId(userPokemon.id);
    } 

    console.log("userTotalPower", userTotalPower);
    console.log("opponentTotalPower", opponentTotalPower);
    
  };

  return (
    <div className="bg-poke-bg bg-cover h-screen">
      {winner !== null ? (
        <FightResult winner={winner} winnerId={winnderId} loserId={loserId} />
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
