import { useState, useEffect } from "react";
import { FaPlay, FaTrash } from "react-icons/fa";
import "./styles/Table.css";
import "./styles/nodes.css";

import { generateArray, setUnorderedType, updateTable } from "../util/util";
import { animate, animateSorted } from "../util/animate/animate";

function Table(props) {
  const [list, setList] = useState([]);
  const [sorted, setSorted] = useState(false);
  const [isSorting, setIsSorting] = useState(false);
  const [sliderVal, setSliderVal] = useState(50);

  useEffect(() => {
    /* Make list of Cells with random heights onload*/
    let new_list = generateArray(document.querySelector(".table"));
    setList(new_list);
  }, []);

  useEffect(() => {
    /* Display the list of elements every time list changes */
    document.querySelector(".table").innerHTML = updateTable(list);
  }, [list]);

  const handleVisualize = () => {
    /* Handle Visualize click */
    let errEl = document.querySelector(".error-message");
    if (!props.algorithm) {
      errEl.innerText = "Select an Algorithm From Navbar to Visualize It";
      return;
    }
    errEl.innerText = "";
    if (isSorting) return;
    if (sorted) {
      setList(setUnorderedType(list));
      animateSorted(
        list,
        document.querySelector(".table"),
        setSorted,
        setIsSorting,
        sliderVal
      );
    } else {
      setIsSorting(true);
      animate(props.algorithm, list, setSorted, setIsSorting, sliderVal);
    }
  };

  const handleRandomize = () => {
    /* Handle randomize click */
    if (isSorting) return;
    setList(generateArray(document.querySelector(".table")));
    setSorted(false);
  };

  return (
    <div className="Table">
      <div className="table-buttons">
        <button>
          <FaPlay />
          <div className="visualize-btn" onClick={handleVisualize}>
            Visualize
          </div>
        </button>
        <hr className="line" />
        <button>
          <FaTrash />
          <div className="randomize-btn" onClick={handleRandomize}>
            Randomize
          </div>
        </button>
        <p className="error-message"></p>
        <div className="slidecontainer">
          <label htmlFor="" className="justify-content-between">
            Sorting Speed
          </label>
          <input
            type="range"
            className="slider"
            min="1"
            max="100"
            value={sliderVal}
            onInput={(e) => {
              setSliderVal(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="table"></div>
    </div>
  );
}

export default Table;
