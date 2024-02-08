import { createContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [allPokemon, setAllPokemon] = useState();

  const value = { allPokemon, setAllPokemon };

  return <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>;
};
