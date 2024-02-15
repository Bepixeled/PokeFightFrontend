import { React, useEffect } from "react";

const FightResult = ({ winner, winnerId, loserId }) => {
   const updateLeaderboard = async (winnerId, loserId) => {
     try {
      if(winnerId === null || loserId === null) return console.error('Error updating leaderboard');
       const response = await fetch('https://pokefightapi-bq3z.onrender.com/pokemon/game/save', {
         method: 'PUT',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
           winnerId: winnerId,
            loserId: loserId,
         }),
       });

       if (response.ok) {
       console.log('Leaderboard updated successfully');
       } else {
        
          console.error('Error updating leaderboard', error);
       }
     } catch (error) {
      console.error('Error updating leaderboard', error);
    }
   }; 

  console.log(winner);


  useEffect(() => {
    if (winner) {
      updateLeaderboard(winnerId, loserId);
    }
  }, [winner]);
  
  return    (
      <div className="text-center font-roboto bg-poke-bg bg-no-repeat bg-cover">
        <div className="flex justify-center items-center h-screen flex-col space-y-8">
        <h1 className="text-4xl lg:text-6xl font-bold text-yellow-300 font-outline-2 font-pokemon ">
  {winner ? `${winner} wins!` : "Fight"}
</h1>
<div className="flex justify-between items-center">
  <a href="/">
    <div className="bg-fight-btn bg-contain h-48 w-48">
      <button className="h-48 w-48">Fight again</button>
    </div>
  </a>
  <a href="/">
    <div className="bg-fight-btn bg-contain h-48 w-48">
      <button className="h-48 w-48">Leaderboard</button>
    </div>
  </a>
</div>
        </div>
      </div>
    );
};

export default FightResult;
