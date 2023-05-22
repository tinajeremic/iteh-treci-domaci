import './App.css';
import Nav from "./components/Nav";
import Albumi from "./components/Albumi";
import { useState } from "react";

function App() {


const [kriterijumPretrage, setKriterijumPretrage] = useState("");

function pretrazi(kriterijum) {
  setKriterijumPretrage(kriterijum);
}

  return (
    <div className="App">
      <Nav pretrazi={pretrazi}></Nav>
      <Albumi></Albumi>
    </div>
  );
}

export default App;
