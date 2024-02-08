import React, { useEffect, useState } from 'react';
import CustomCard from './CustomCard';

const YourPage = () => {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
          const data = await result.json();
  
          const cardData = {
            name: data.name,
            imageUrl: data.sprites.other.home.front_default,
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            speed: data.stats[5].base_stat,
          };
  
          setPokemonData(cardData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []); 
    return (
      <div>
        {pokemonData && <CustomCard {...pokemonData} />}
      </div>
    );
  };

export default YourPage;