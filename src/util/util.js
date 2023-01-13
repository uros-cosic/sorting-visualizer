import { Cell } from "./Cell";
import { quickSort } from "./algorithms/quick-sort";
import { bubbleSort } from "./algorithms/bubble-sort";
import { mergeSort } from "./algorithms/merge-sort";

const calculateSize = (tableEl) => {
  /* Used to calculate max height for Cell and width to maximaze number of Cells */
  const { x, y } = tableEl.getBoundingClientRect();
  return {
    height: window.innerHeight - y,
    width: window.innerWidth - x,
  };
};

const rng = (max, min = 1) => {
  /* Return random number in range min-max */
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const setUnorderedType = (list) => {
  /* Set type of every element in a list to be unordered */
  return list.map((item) => {
    item.type = "unordered";
    return item;
  });
};

export const generateArray = (tableEl) => {
  /* Generate new array of Cells with randomized height */
  const { height, width } = calculateSize(tableEl);
  const elements_num = Math.floor(width / Cell.DEFAULT_WIDTH);
  let res = [];
  for (let i = 0; i < elements_num; i++) {
    res.push(new Cell("unordered", rng(height)));
  }
  return res;
};

export const getAlgorithm = (name) => {
  /* Get algorithm functions based on name */
  const available = {
    "bubble sort": {
      algorithm: bubbleSort,
    },
    "merge sort": {
      algorithm: mergeSort,
    },
    "quick sort": {
      algorithm: quickSort,
    },
  };
  return available[name];
};

export function updateTable(list) {
  /* Return string of list Cells used for tables innerHTML */
  return list
    .map((cell) => {
      return `<div 
                    class="Cell ${cell.type}" 
                    style="height: ${cell.height}px; width: ${cell.width}px;"
                ></div>`;
    })
    .join("");
}
