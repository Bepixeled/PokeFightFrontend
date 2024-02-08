import React, { useState, useEffect } from "react";

const Fight = () => {
  const [pokemon1, setPokemon1] = useState("pikachu");
  const [pokemon2, setPokemon2] = useState("");
  const [userImageUrl, setUserImageUrl] = useState("");
  const [opponentImageUrl, setOpponentImageUrl] = useState("");
  const [userHp, setUserHp] = useState(0);
  const [opponentHp, setOpponentHp] = useState(0);
  const [userAttack, setUserAttack] = useState(0);
  const [opponentAttack, setOpponentAttack] = useState(0);
  const [userDefense, setUserDefense] = useState(0);
  const [opponentDefense, setOpponentDefense] = useState(0);
  const [userSpeed, setUserSpeed] = useState(0);
  const [opponentSpeed, setOpponentSpeed] = useState(0);
  const [userType, setUserType] = useState("");
  const [opponentType, setOpponentType] = useState("");

  useEffect(() => {
    const userPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon1}`);
        if (!response.ok) {
          console.error("Failed to fetch user Pokemon data");
          return;
        }

        const data = await response.json();
        const imageUrl = data.sprites?.other?.home?.front_default;

        setUserHp(data.stats[0].base_stat);
        setUserAttack(data.stats[1].base_stat);
        setUserDefense(data.stats[2].base_stat);
        setUserSpeed(data.stats[5].base_stat);
        setUserType(data.types[0].type.name);

        if (imageUrl) {
          setUserImageUrl(imageUrl);
        } else {
          console.error("Image URL not found in the user Pokemon response");
        }
      } catch (error) {
        console.error("Error fetching user Pokemon data:", error);
      }
    };

    userPokemon();
  }, [pokemon1]);

  useEffect(() => {
    const opponentPokemon = async () => {
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

        setOpponentHp(data.stats[0].base_stat);
        setOpponentAttack(data.stats[1].base_stat);
        setOpponentDefense(data.stats[2].base_stat);
        setOpponentSpeed(data.stats[5].base_stat);
        setOpponentType(data.types[0].type.name);
        setPokemon2(data.name);

        if (imageUrl) {
          setOpponentImageUrl(imageUrl);
        } else {
          console.error("Image URL not found in the opponent Pokemon response");
        }
      } catch (error) {
        console.error("Error fetching opponent Pokemon data:", error);
      }
    };

    opponentPokemon();
  }, [pokemon1]);

  return (
    <div className="bg-poke-bg bg-cover h-screen">
      <div className="text-center font-roboto bg-poke-bg bg-no-repeat bg-cover">
        <h1 className="text-4xl lg:text-6xl font-bold text-yellow-300 font-outline-2 font-pokemon ">Fight</h1>
        <div className="flex flex-col lg:flex-row justify-around items-center mt-24">
          <div className="flex flex-col justify-center items-center w-72 lg:w-96 h-96 lg:h-[80%] bg-card-bg-left bg-cover bg-center rounded-xl border-white border-solid border-8">
            <h2 className="font-pokemon font-bold  text-1xl lg:text-4xl font-outline-2 text-yellow-300 ">{pokemon1}</h2>
            <p></p>
            <img src={userImageUrl} alt={pokemon1} className="w-40 lg:w-80 lg:h-80 rounded-lg my-4" />
            <div className="bg-white w-[50%] h-auto bg-opacity-60 p-4 rounded-lg mb-4">
              <p>
                <span className="mr-2 font-semibold ">HP:</span>
                {userHp}
              </p>
              <p>
                <span className="mr-2 font-semibold ">Attack:</span>
                {userAttack}
              </p>
              <p>
                <span className="mr-2 font-semibold ">Defense:</span>
                {userDefense}
              </p>
              <p>
                <span className="mr-2 font-semibold ">Speed:</span>
                {userSpeed}
              </p>
            </div>
          </div>

          <div className="bg-fight-btn bg-contain h-48 w-48">
            <button className="h-48 w-48">Fight</button>
          </div>

          <div className="flex flex-col justify-center items-center w-72 lg:w-96 h-96 lg:h-[80%] bg-card-bg-left bg-cover bg-center rounded-xl border-white border-solid border-8 mb-12">
            <h2 className="font-pokemon font-bold text-4xl text-yellow-300 font-outline-2">{pokemon2}</h2>
            <p></p>
            <img src={opponentImageUrl} alt="" className="w-40 lg:w-80 lg:h-80 rounded-lg my-4" />
            <div className="bg-white w-[50%] h-auto bg-opacity-60 p-4 rounded-lg mb-4">
              <p>
                <span className="mr-2 font-semibold ">HP:</span>
                {opponentHp}
              </p>
              <p>
                <span className="mr-2 font-semibold ">Attack:</span>
                {opponentAttack}
              </p>
              <p>
                <span className="mr-2 font-semibold ">Defense:</span>
                {opponentDefense}
              </p>
              <p>
                <span className="mr-2 font-semibold ">Speed:</span>
                {opponentSpeed}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fight;
