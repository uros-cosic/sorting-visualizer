import { useState } from "react";
import "./styles/Navbar.css";
import { FaCaretDown } from "react-icons/fa";

import data from "../data/data.json";

function Navbar(props) {
  const [visible, setVisible] = useState(false);

  const handleMenuClick = () => {
    /* Toggles dropdown content visibility */
    setVisible(!visible);
  };

  const handleItemClick = (e) => {
    /* Set state algorithm to clicked item and hide dropdown content */
    let algName = e.target.innerText.toLowerCase().trim();
    setVisible(!visible);
    props.setAlgorithm(algName);
  };

  return (
    <div className="Navbar">
      <ul className="nav-items">
        <li>
          <a href="/" className="logo">
            Sorting Visualizer
          </a>
        </li>
        <li>
          <button className="dropdown alg-menu" onClick={handleMenuClick}>
            Algorithm <FaCaretDown />
          </button>
        </li>
        <div
          className="dropdown-content"
          style={{ display: visible ? "flex" : "none" }}
        >
          <ul className="dropdown-items">
            {data.algorithms.map((alg, idx) => (
              <div key={idx}>
                <li onClick={handleItemClick}>{alg.name}</li>
              </div>
            ))}
          </ul>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
