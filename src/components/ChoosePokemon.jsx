import { useState } from "react";
import PokemonCard from "./PokemonCard";
import axios from "axios";

const ChoosePokemon = () => {
  const [allPokemons, setAllPokemons] = useState([]);

  const getPokemons = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
      setAllPokemons(response.data.results);
    } catch (error) {}
  };

  getPokemons();

  return (
    <section className="bg-[url('/src/assets/images/background.jpg')] min-w-full min-h-screen mx-auto bg-cover bg-no-repeat p-4 flex flex-col items-center">
      <h1 className="text-4xl lg:text-5xl font-bold text-yellow-300 font-outline-2 font-pokemon mt-24">
        Choose your Pokemon
      </h1>
      <input type="text" className="mt-8 rounded bg-white opacity-65 p-2 w-64" placeholder="Search..." />
      <div className="grid grid-cols-4 mt-8 gap-8">
        {allPokemons.map((pokemon, index) => (index < 8 ? <PokemonCard /> : null))}
      </div>
    </section>
  );
};

export default ChoosePokemon;
