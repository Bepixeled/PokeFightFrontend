import React, { useState, useEffect } from "react";
import fightbtn from "../assets/images/fight-btn.png";

const Fight = () => {
  const [pokemon1, setPokemon1] = useState("pikachu");
  const [pokemon2, setPokemon2] = useState("bulbasaur");
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


  useEffect(() => {
    const userPokemon = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon1}`
        );
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

        if (imageUrl) {
          setUserImageUrl(imageUrl);
        } else {
          console.error("Image URL not found in the user Pokemon response");
        }
      } catch (error) {
        console.error("Error fetching user Pokemon data:", error);
      }
    };

    const opponentPokemon = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon2}`
        );
        if (!response.ok) {
          console.error("Failed to fetch opponent Pokemon data");
          return;
        }

        const data = await response.json();
        const imageUrl = data.sprites?.other?.home?.front_default;

        setOpponentHp(data.stats[0].base_stat);
        setOpponentAttack(data.stats[1].base_stat);
        setOpponentDefense(data.stats[2].base_stat);
        setOpponentSpeed(data.stats[5].base_stat);


        if (imageUrl) {
          setOpponentImageUrl(imageUrl);
        } else {
          console.error("Image URL not found in the opponent Pokemon response");
        }
      } catch (error) {
        console.error("Error fetching opponent Pokemon data:", error);
      }
    };

    userPokemon();
    opponentPokemon();
  }, [pokemon1, pokemon2]);

  return (
    <div className="text-center font-roboto">
      <h1 className="text-3xl text-black font-pokemon">Fight</h1>
<div className="flex justify-around items-center mt-24">
    
      <div className="flex flex-col justify-center items-center w-96 max-h-[80%] bg-card-bg-left bg-cover bg-center  rounded-xl border-white border-solid border-8">
        <h2 className="font-pokemon text-3xl text-red-600">{pokemon1}</h2>
        <p></p>
        <img src={userImageUrl} alt="" className="w-80 h-80 rounded-lg my-4" />
        <div className="bg-white w-[50%] h-auto bg-opacity-60 p-4 rounded-lg mb-4">
        <p><span className="mr-2 font-semibold ">HP:</span>{userHp}</p>
        <p><span className="mr-2 font-semibold ">Attack:</span>{userAttack}</p>
        <p><span className="mr-2 font-semibold ">Defense:</span>{userDefense}</p>
        <p><span className="mr-2 font-semibold ">Speed:</span>{userSpeed}</p>
        </div>
      </div>

        <div className="bg-fight-btn bg-contain h-48 w-48" ><button className="h-48 w-48" >Fight</button></div>

        

        <div className="flex flex-col justify-center items-center w-96 max-h-[80%] bg-card-bg-left bg-cover bg-center  rounded-xl border-white border-solid border-8">
        <h2 className="font-pokemon text-3xl text-red-600">{pokemon2}</h2>
        <p></p>
        <img src={opponentImageUrl} alt="" className="w-80 h-80 rounded-lg my-4" />
        <div className="bg-white w-[50%] h-auto bg-opacity-60 p-4 rounded-lg mb-4">
        <p><span className="mr-2 font-semibold ">HP:</span>{opponentHp}</p>
        <p><span className="mr-2 font-semibold ">Attack:</span>{opponentAttack}</p>
        <p><span className="mr-2 font-semibold ">Defense:</span>{opponentDefense}</p>
        <p><span className="mr-2 font-semibold ">Speed:</span>{opponentSpeed}</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Fight;
