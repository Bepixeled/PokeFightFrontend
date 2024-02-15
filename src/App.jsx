import "./App.css";
import ChoosePokemon from "./components/ChoosePokemon";
import Fight from "./components/Fight";
import { Routes, Route } from "react-router-dom";
import Highscore from "./components/Highscore";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ChoosePokemon />} />
        <Route path="/fight" element={<Fight />} />
        <Route path="/highscore" element={<Highscore />} />
      </Routes>
    </>
  );
}

export default App;
