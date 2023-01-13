import { getAlgorithm, updateTable } from "../util";
import { mergeSort } from "../algorithms/merge-sort";

export const animateSorted = (
  list,
  tableEl,
  setSorted,
  setIsSorting,
  sortingSpeed
) => {
  /* Play the ordered animation */
  sortingSpeed = calculateSortingSpeed(sortingSpeed);
  for (let i = 0; i <= list.length; i++) {
    setTimeout(() => {
      if (i === list.length) {
        setIsSorting(false);
        setSorted(true);
        return;
      }
      list[i].type = "ordered";
      tableEl.innerHTML = updateTable(list);
    }, i * sortingSpeed);
  }
};

const calculateSortingSpeed = (sortingSpeed) => {
  /* Set visualizing speed based on sortingSpeed */
  if (sortingSpeed < 34) return 20;
  if (sortingSpeed >= 34 && sortingSpeed < 66) return 10;
  return 5;
};

export const animate = (
  alg_name,
  list,
  setSorted,
  setIsSorting,
  sortingSpeed
) => {
  /* Play the sorting animation based on algorithm */
  const tableEl = document.querySelector(".table");
  const sortingSpeedConverted = calculateSortingSpeed(sortingSpeed);
  if (alg_name === "merge sort") {
    animateMergeSort(list, tableEl, setSorted, setIsSorting, sortingSpeed);
    return;
  }
  const sortedList = [...list];
  const sortedOrdered = [];
  getAlgorithm(alg_name).algorithm(
    sortedList,
    0,
    list.length - 1,
    sortedOrdered
  );
  for (let i = 0; i <= sortedOrdered.length; i++) {
    if (i === sortedOrdered.length) {
      setTimeout(() => {
        animateSorted(list, tableEl, setSorted, setIsSorting, sortingSpeed);
      }, i * sortingSpeedConverted);
    } else {
      setTimeout(() => {
        const F = sortedOrdered[i][0];
        const S = sortedOrdered[i][1];
        swap(F, S, list);
        tableEl.innerHTML = updateTable(list);
      }, i * sortingSpeedConverted);
    }
  }
};

const swap = (first, second, arr) => {
  /* Swap arr[first] and arr[second] and set their type to swap */
  const temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
  arr[first].type = "swap";
  arr[second].type = "swap";
};

const animateMergeSort = (
  arr,
  tableEl,
  setSorted,
  setIsSorting,
  sortingSpeed
) => {
  /* Play animation for merge sort */
  let arr2 = arr.slice();
  let animate = [];
  const sortingSpeedConverted = calculateSortingSpeed(sortingSpeed);
  mergeSort(arr, 0, arr.length - 1, animate);
  for (let i = 0; i <= animate.length; i++) {
    if (i === animate.length) {
      setTimeout(() => {
        animateSorted(arr, tableEl, setSorted, setIsSorting, sortingSpeed);
      }, i * sortingSpeedConverted);
      return;
    }
    setTimeout(() => {
      const [k, newNode] = animate[i];
      arr2[k] = newNode;
      arr2[k].type = "swap";
      tableEl.innerHTML = updateTable(arr2);
    }, i * sortingSpeedConverted);
  }
};
