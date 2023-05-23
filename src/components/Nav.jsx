import React from 'react';
import { Link } from 'react-router-dom';
import {BsSearch} from "react-icons/bs";

const Nav = ({pretrazi}) => {
  return (
    <nav className="navbar">
    <div className="container">
    <div className="logo"></div>
    <div className="nav-elements">
        <ul>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/knjige">
                Books
              </Link>
            </li>
            <li>
              <Link className="link" to="/izabrane">
                Wishlist
              </Link>
            </li>

            <li>
                <input 
                type="text" 
                id="kriterijum"
                placeholder="Search books"
                name="search"
                onChange={() =>
                    pretrazi(document.getElementById("kriterijum").value)
                  }
                />
                <button type="submit" className="dugmePretraga">
                {" "}
                <BsSearch></BsSearch>{" "}
                </button>
            </li>
        </ul>

    </div>
    </div>
    </nav>
  )
}

export default Nav
