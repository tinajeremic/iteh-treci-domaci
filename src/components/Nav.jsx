import React from 'react'
import {BsSearch} from "react-icons/bs"

const Nav = ({pretrazi}) => {
  return (
    <nav className="navbar">
    <div className="container">
    <div className="logo"></div>
    <div className="nav-elements">
        <ul>
            <li>Naslovna</li>
            <li>Albumi</li>
            <li>Izabrani albumi</li>

            <li>
                <input 
                type="text" 
                id="kriterijum"
                placeholder="Search albums"
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
