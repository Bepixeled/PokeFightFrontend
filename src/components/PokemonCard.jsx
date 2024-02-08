import { FlippingCard, FlippingCardFront, FlippingCardBack } from "react-ui-cards";

const PokemonCard = ({ img, name, stats }) => {
  return (
    <FlippingCard>
      <FlippingCardFront>
        <div className="w-64 h-80 m-4 bg-white opacity-65 text-white flex items-center justify-center">
          <p>Das ist die Rückseite der Karte</p>
        </div>
      </FlippingCardFront>
      <FlippingCardBack>
        <div className="w-64 h-80 m-4 bg-white opacity-65 text-white flex items-center justify-center">
          <p>Das ist die Rückseite der Karte</p>
        </div>
      </FlippingCardBack>
    </FlippingCard>
  );
};

export default PokemonCard;
