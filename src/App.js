import './App.css';
import Nav from "./components/Nav";
import Preporuke from "./components/Preporuke";
import Footer from './components/Footer';
import Knjige from './components/Knjige';
import Izabrane from './components/Izabrane';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from "react";

function App() {

  const [wishlistR, setWishlistR] = useState([]);
  const [knjigeNiz] = useState([
    {
      id: 1,
      naziv: "A Court of Thorns and Roses",
      slika: "https://www.knjizare-vulkan.rs/files/images/slike_proizvoda/349511.jpg",
      opis: "When nineteen-year-old huntress Feyre kills a wolf in the woods, a terrifying creature arrives to demand retribution. Dragged to a treacherous magical land she knows about only from legends, Feyre discovers that her captor is not truly a beast, but one of the lethal, immortal faeries who once ruled her world.",
      godina: "2015",
      wishlist: 0,
    },
    {
      id:2,
      naziv:"A Court of Mist and Fury",
      slika:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1620325671i/50659468.jpg",
      opis:"Feyre has undergone more trials than one human woman can carry in her heart. Though she's now been granted the powers and lifespan of the High Fae, she is haunted by her time Under the Mountain and the terrible deeds she performed to save the lives of Tamlin and his people.",
      godina:"2016",
      wishlist:0,
    },
    {
      id:3,
      naziv:"Lord of the Rings: The Fellowship of the Ring",
      slika:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654215925i/61215351.jpg",
      opis:"In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell into the hands of Bilbo Baggins, as told in The Hobbit.",
      godina:"1954",
      wishlist:0,
    },
    {
      id:4,
      naziv:"The Silmarillion",
      slika:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1610045590i/7332.jpg",
      opis:"The Silmarillion is an account of the Elder Days, of the First Age of Tolkien’s world. It is the ancient drama to which the characters in The Lord of the Rings look back, and in whose events some of them such as Elrond and Galadriel took part. The tales of The Silmarillion are set in an age when Morgoth, the first Dark Lord, dwelt in Middle-Earth, and the High Elves made war upon him for the recovery of the Silmarils, the jewels containing the pure light of Valinor.",
      godina:"1977",
      wishlist:0,
    },
    {
      id:5,
      naziv:"Shatter Me",
      slika:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1310649047i/10429045.jpg",
      opis:"Juliette has to make a choice: Be a weapon. Or be a warrior.",
      godina:"2011",
      wishlist:0,
    },
    {
      id:6,
      naziv:"Kingdom of the Wicked",
      slika:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1578938260l/52735921.jpg",
      opis:"Emilia and her twin sister Vittoria are streghe - witches who live secretly among humans, avoiding notice and persecution. One night, Vittoria misses dinner service at the family's renowned Sicilian restaurant. Emilia soon finds the body of her beloved twin...desecrated beyond belief. Devastated, Emilia sets out to find her sister's killer and to seek vengeance at any cost—even if it means using dark magic that's been long forbidden.",
      godina:"2020",
      wishlist:0,
    },
    {
      id:7,
      naziv:"Harry Potter and the Goblet of Fire",
      slika:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554006152i/6.jpg",
      opis:"It is the summer holidays and soon Harry Potter will be starting his fourth year at Hogwarts School of Witchcraft and Wizardry. Harry is counting the days: there are new spells to be learnt, more Quidditch to be played, and Hogwarts castle to continue exploring. But Harry needs to be careful - there are unexpected dangers lurking...",
      godina:"2000",
      wishlist:0,
    },
    {
      id:8,
      naziv:"House of Sky and Breath",
      slika:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1633097753i/40132775.jpg",
      opis:"Bryce Quinlan and Hunt Athalar are trying to get back to normal―they may have saved Crescent City, but with so much upheaval in their lives lately, they mostly want a chance to relax. Slow down. Figure out what the future holds.",
      godina:"2022",
      wishlist:0,
    },
    {
      id:9,
      naziv:"House of Earth and Blood",
      slika:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1559142847i/44778083.jpg",
      opis:"Bryce Quinlan had the perfect life-working hard all day and partying all night-until a demon murdered her closest friends, leaving her bereft, wounded, and alone. When the accused is behind bars but the crimes start up again, Bryce finds herself at the heart of the investigation. She'll do whatever it takes to avenge their deaths.",
      godina:"2020",
      wishlist:0,
    },
    {
      id:10,
      naziv:"The Hobbit",
      slika:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546071216i/5907.jpg",
      opis:"In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.",
      godina:"1937",
      wishlist:0,
    },
    {
      id:11,
      naziv:"Harry Potter and the Prisoner of Azkaban",
      slika:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630547330i/5.jpg",
      opis:"Harry Potter, along with his best friends, Ron and Hermione, is about to start his third year at Hogwarts School of Witchcraft and Wizardry. Harry can't wait to get back to school after the summer holidays. (Who wouldn't if they lived with the horrible Dursleys?) But when Harry gets to Hogwarts, the atmosphere is tense.",
      godina:"1999",
      wishlist:0,
    },
    {
      id:12,
      naziv:"Ignite Me",
      slika:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1375972497i/13188676.jpg",
      opis:"With Omega Point destroyed, Juliette doesn’t know if the rebels, her friends, or even Adam are alive. But that won’t keep her from trying to take down The Reestablishment once and for all. ",
      godina:"2014",
      wishlist:0,
    },
    {
      id:13,
      naziv:"It Ends With Us",
      slika:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1470427482i/27362503.jpg",
      opis:"Sometimes it is the one who loves you who hurts you the most.",
      godina:"2016",
      wishlist:0,
    },
    {
      id:14,
      naziv:"Babel, or the Necessity of Violence",
      slika:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1641403302i/59729042.jpg",
      opis:"A novel that grapples with student revolutions, colonial resistance, and the use of language and translation as the dominating tool of the British empire.",
      godina:"2022",
      wishlist:0,
    }
  ]);

const [kriterijumPretrage, setKriterijumPretrage] = useState("");

function pretrazi(kriterijum) {
  setKriterijumPretrage(kriterijum);
}

function add(id) {
  for (var i = 0; i < knjigeNiz.length; i++) {
    if (knjigeNiz[i].id === id) {
      knjigeNiz[i].wishlist = 1;
    }
  }
  var niz = knjigeNiz.filter((r) => r.wishlist === 1);
  setWishlistR(niz);
}
function remove(id) {
  for (var i = 0; i < knjigeNiz.length; i++) {
    if (knjigeNiz[i].id === id) {
      knjigeNiz[i].wishlist = 0;
    }
  }
  var niz = knjigeNiz.filter((r) => r.wishlist === 1);
  setWishlistR(niz);
}

  return (
    <div className="App">
      <div>
      <BrowserRouter>
      <Nav pretrazi={pretrazi}></Nav>
      <Routes>
        <Route path="/" element={<Preporuke></Preporuke>}></Route>
        <Route
              path="/knjige"
              element={
                <Knjige
                  kriterijum={kriterijumPretrage}
                  knjige={knjigeNiz}
                  add={add}
                ></Knjige>
              }
            ></Route>
        <Route
              path="/izabrane"
              element={
                <Izabrane
                  kriterijum={kriterijumPretrage}
                  knjige={wishlistR}
                  remove={remove}
                ></Izabrane>
              }
        ></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
