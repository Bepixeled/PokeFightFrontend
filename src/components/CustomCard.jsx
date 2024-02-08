import React from "react";

const CustomCard = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-center w-72 lg:w-96 h-96 lg:h-[80%] bg-card-bg-left bg-cover bg-center rounded-xl border-white border-solid border-8">
      <h2 className="font-pokemon font-bold  text-1xl lg:text-4xl font-outline-2 text-yellow-300 ">{data.name}</h2>
      <p></p>
      <img src={data.imageUrl} alt="" className="w-40 lg:w-80 lg:h-80 rounded-lg my-4" />
      <div className="bg-white w-[50%] h-auto bg-opacity-60 p-4 rounded-lg mb-4">
        <p>
          <span className="mr-2 font-semibold">HP:</span>
          {data.hp}
        </p>
        <p>
          <span className="mr-2 font-semibold">Attack:</span>
          {data.attack}
        </p>
        <p>
          <span className="mr-2 font-semibold">Defense:</span>
          {data.defense}
        </p>
        <p>
          <span className="mr-2 font-semibold">Speed:</span>
          {data.speed}
        </p>
      </div>
    </div>
  );
};

export default CustomCard;
