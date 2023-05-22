import './App.css';
import Nav from "./components/Nav";
import { useState } from "react";

function App() {


const [kriterijumPretrage, setKriterijumPretrage] = useState("");

function pretrazi(kriterijum) {
  setKriterijumPretrage(kriterijum);
}

  return (
    <div className="App">
      <Nav pretrazi={pretrazi}></Nav>
    </div>
  );
}

export default App;
