import { useEffect, useState } from "react";
import CustomCard from "./CustomCard";
import useAxios from "../hooks/useAxios";

const ChoosePokemon = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [limit, setLimit] = useState(8);
  const [offset, setOffset] = useState(0);
  const { getData } = useAxios();

  const url = `https://pokefightapi-bq3z.onrender.com/pokemon?limit=${limit}&offset=${offset}`;

  const fetchPokemons = async () => {
    const allPokemons = await getData(url);
    setPokemonData(allPokemons);
  };

  useEffect(() => {
    fetchPokemons();
  }, [offset]);

  const changeOffset = (value) => {
    if (offset === 0 && value < 0) {
      fetchPokemons();
      return;
    }
    const newOffset = offset + value;

    console.log(newOffset);
    setOffset(newOffset);
  };

  return (
    <section className="bg-[url('/src/assets/images/background.jpg')] min-w-full min-h-screen mx-auto bg-cover bg-no-repeat p-4 flex flex-col items-center">
      <h1 className="text-4xl lg:text-5xl font-bold text-yellow-300 font-outline-2 font-pokemon mt-24">
        Choose your Pokemon
      </h1>
      <input type="text" className="mt-8 rounded bg-white opacity-65 p-2 w-64 mb-12" placeholder="Search..." />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-8 gap-8">
        {[...Array(8)].map((_, index) => (
          <CustomCard key={index} data={pokemonData ? pokemonData[index] : undefined} />
        ))}
      </div>
      <div className="flex gap-16 text-2xl lg:text-3xl font-bold text-yellow-300 font-outline-2 font-pokemon">
        <span
          className="cursor-pointer"
          onClick={() => {
            setPokemonData(null), changeOffset(-8);
          }}
        >
          Previous
        </span>
        <span
          className="cursor-pointer"
          onClick={() => {
            setPokemonData(null), changeOffset(8);
          }}
        >
          Next
        </span>
      </div>
    </section>
  );
};

export default ChoosePokemon;
