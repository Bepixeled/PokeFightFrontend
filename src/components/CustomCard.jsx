import React from 'react';

const CustomCard = ({ name, imageUrl, hp, attack, defense, speed }) => {
   return (
    <div className="flex flex-col justify-center items-center w-72 lg:w-96 h-96 lg:h-[80%] bg-card-bg-left bg-cover bg-center rounded-xl border-white border-solid border-8">
      <h2 className="font-pokemon font-bold  text-1xl lg:text-4xl font-outline-2 text-yellow-300 ">{name}</h2>
      <p></p>
      <img src={imageUrl} alt="" className="w-40 lg:w-80 lg:h-80 rounded-lg my-4"  />
      <div className="bg-white w-[50%] h-auto bg-opacity-60 p-4 rounded-lg mb-4">
        <p>
          <span className="mr-2 font-semibold">HP:</span>
          {hp}
        </p>
        <p>
          <span className="mr-2 font-semibold">Attack:</span>
          {attack}
        </p>
        <p>
          <span className="mr-2 font-semibold">Defense:</span>
          {defense}
        </p>
        <p>
          <span className="mr-2 font-semibold">Speed:</span>
          {speed}
        </p>
      </div>
    </div>
  );
};

export default CustomCard;