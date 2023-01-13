export function bubbleSort(arr, left = null, right = null, animate = []) {
  /* Bubble sort algorithm implementation */
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j].height > arr[j + 1].height) {
        animate.push([j, j + 1]);
        swap(arr, j, j + 1);
      }
    }
  }
}

function swap(arr, x, y) {
  /* Swap arr[x] and arr[y] elements */
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}
