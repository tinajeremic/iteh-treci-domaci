import './App.css';
import Nav from "./components/Nav";
import Preporuke from "./components/Preporuke";
import Footer from './components/Footer';
import { useState } from "react";

function App() {


const [kriterijumPretrage, setKriterijumPretrage] = useState("");

function pretrazi(kriterijum) {
  setKriterijumPretrage(kriterijum);
}

  return (
    <div className="App">
      <Nav pretrazi={pretrazi}></Nav>
      <Preporuke></Preporuke>
      <Footer></Footer>
    </div>
  );
}

export default App;
