import { useContext, useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import axios from "axios";
import CustomCard from "./CustomCard";
import useAxios from "../hooks/useAxios";
import { PokemonContext } from "../provider/PokemonContext";

const ChoosePokemon = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const { getData } = useAxios();

  const url = "https://pokefightapi-bq3z.onrender.com/pokemon?limit=8&offset=0";

  useEffect(() => {
    const fetchAllPokemons = async () => {
      const allPokemons = await getData(url);
      setPokemonData(allPokemons);
    };

    fetchAllPokemons();
  }, []);

  useEffect(() => {
    console.log(pokemonData);
  }, [pokemonData]);

  return (
    <section className="bg-[url('/src/assets/images/background.jpg')] min-w-full min-h-screen mx-auto bg-cover bg-no-repeat p-4 flex flex-col items-center">
      <h1 className="text-4xl lg:text-5xl font-bold text-yellow-300 font-outline-2 font-pokemon mt-24">
        Choose your Pokemon
      </h1>
      <input type="text" className="mt-8 rounded bg-white opacity-65 p-2 w-64 mb-12" placeholder="Search..." />
      <div className="grid grid-cols-4 mt-8 gap-8">
        {pokemonData.map((pokemon, index) => (index < 8 ? <CustomCard key={pokemon.name} data={pokemon} /> : null))}
      </div>
    </section>
  );
};

export default ChoosePokemon;
