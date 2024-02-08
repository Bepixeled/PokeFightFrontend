import PokemonCard from "./PokemonCard";

const ChoosePokemon = () => {
  const getPokemons = async () => {
    try {
      const response = await axios.get();
    } catch (error) {}
  };

  return (
    <section className="bg-[url('/src/assets/images/background.jpg')] max-w-screen-xl mx-auto bg-cover bg-no-repeat p-4 flex flex-col items-center">
      <h1 className="font-pokemon font-bold text-yellow-400 text-4xl">Choose your Pokemon</h1>
      <input type="text" className="mt-8 rounded bg-white opacity-65 p-2" placeholder="Search..." />
      <PokemonCard />
    </section>
  );
};

export default ChoosePokemon;
