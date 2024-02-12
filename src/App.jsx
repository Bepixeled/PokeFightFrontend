import "./App.css";
import ChoosePokemon from "./components/ChoosePokemon";
import Fight from "./components/Fight";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ChoosePokemon />} />
        <Route path="/fight" element={<Fight />} />
      </Routes>
    </>
  );
}

export default App;
