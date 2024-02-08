import "./App.css";
import ChoosePokemon from "./components/ChoosePokemon";
import Fight from "./components/fight";

function App() {
  return (
    <>
      <ChoosePokemon />
      <div className="bg-poke-bg bg-cover h-screen">
        <Fight />
      </div>
    </>
  );
}

export default App;
