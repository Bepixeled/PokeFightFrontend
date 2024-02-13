import { createContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [currentPokemon, setCurrentPokemon] = useState(null);

  const value = { currentPokemon, setCurrentPokemon };

  return <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>;
};
