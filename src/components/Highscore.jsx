import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import axios from "axios";

const Highscore = () => {
  const [highscores, setHighScores] = useState([]);
  const { getData } = useAxios();
  const url = `https://pokefightapi-bq3z.onrender.com/pokemon/game/leaderboard`;

  useEffect(() => {
    const getHighscores = async () => {
      const response = await getData(url);
      getNamesAndImages(response);
    };
    getHighscores();
  }, []);

  const getNamesAndImages = async (data) => {
    const url = "https://pokefightapi-bq3z.onrender.com/pokemon/";
    const completeData = await Promise.all(
      data.map(async (pokemon) => {
        const pokeData = await axios.get(url + pokemon.id);
        return { ...pokemon, name: pokeData.data.name, url: pokeData.data.sprites.other.home.front_default };
      })
    );
    setHighScores(completeData);
  };

  useEffect(() => {
    console.log(highscores);
  }, [highscores]);

  return (
    <section className="bg-[url('/src/assets/images/background.jpg')] min-w-full min-h-screen mx-auto bg-cover bg-no-repeat p-4 flex flex-col items-center">
      <h1 className="text-4xl lg:text-5xl font-bold text-yellow-300 font-outline-2 font-pokemon mt-24">Highscore</h1>

      <table className="table-auto w-full text-left bg-white opacity-65 mt-24 max-w-screen-xl rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-4">Pokemon</th>
            <th className="px-4 py-4">Wins</th>
            <th className="px-4 py-4">Losses</th>
            <th className="px-4 py-4">Points</th>
            <th className="px-4 py-4">Rank</th>
          </tr>
        </thead>
        <tbody>
          {highscores &&
            highscores.map((highscore, index) => (
              <tr key={highscore.name} className="mb-4">
                <td className="border-0 px-4 py-2 flex items-center gap-4">
                  <img src={highscore.url} width={70} alt={highscore.name + "image"} />
                  {highscore.name}
                </td>
                <td className="border-0 px-4 py-2">{highscore.wins}</td>
                <td className="border-0 px-4 py-2">{highscore.losses}</td>
                <td className="border-0 px-4 py-2">{highscore.wins * 100}</td>
                <td className="border-0 px-4 py-2">{index + 1}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default Highscore;
