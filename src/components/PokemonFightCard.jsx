
const PokemonFightCard = ({ name, imageUrl, hp, attack, defense, speed, type }) => (
  <div className="flex flex-col justify-center items-center w-72 lg:w-96 h-96 lg:h-[80%] bg-card-bg-left bg-cover bg-center rounded-xl border-white border-solid border-8">
    <h2 className="font-pokemon font-bold text-4xl text-yellow-300 font-outline-2">{name}</h2>
    <p></p>
    <img src={imageUrl} alt={name} className="w-40 lg:w-80 lg:h-80 rounded-lg my-4" />
    <div className="bg-white w-[50%] h-auto bg-opacity-60 p-4 rounded-lg mb-4">
      <p>
        <span className="mr-2 font-semibold ">HP:</span>
        {hp}
      </p>
      <p>
        <span className="mr-2 font-semibold ">Attack:</span>
        {attack}
      </p>
      <p>
        <span className="mr-2 font-semibold ">Defense:</span>
        {defense}
      </p>
      <p>
        <span className="mr-2 font-semibold ">Speed:</span>
        {speed}
      </p>
      <p>
        <span className="mr-2 font-semibold ">Type:</span>
        {type}
      </p>
    </div>
  </div>
);

export default PokemonFightCard;