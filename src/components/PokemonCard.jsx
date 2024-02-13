import { FlippingCard, FlippingCardFront, FlippingCardBack } from "react-ui-cards";

const PokemonCard = ({ img, name, stats }) => {
  return (
    <div className="flex flex-col justify-center items-center w-36 lg:w-60 h-60 lg:h-60 bg-card-bg-left bg-cover bg-center rounded-xl border-white border-solid border-8">
      <h2 className="font-pokemon font-bold  text-1xl lg:text-4xl font-outline-2 text-yellow-300 "></h2>
      <p></p>
      <img alt="" className="w-40 lg:w-80 lg:h-80 rounded-lg my-4" />
      <div className="bg-white w-[50%] h-auto bg-opacity-60 p-4 rounded-lg mb-4">
        <p>
          <span className="mr-2 font-semibold ">HP:</span>
        </p>
        <p>
          <span className="mr-2 font-semibold ">Attack:</span>
        </p>
        <p>
          <span className="mr-2 font-semibold ">Defense:</span>
        </p>
        <p>
          <span className="mr-2 font-semibold ">Speed:</span>
        </p>
      </div>
    </div>
  );
};

export default PokemonCard;
