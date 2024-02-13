const FightButton = ({ onClick }) => (
    <div className="bg-fight-btn bg-contain h-48 w-48">
      <button className="h-48 w-48" onClick={onClick}>
        Fight
      </button>
    </div>
  );
  
  export default FightButton;