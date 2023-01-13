export class Cell {
  /* Cell representing individual element in a array */
  static DEFAULT_WIDTH = 20;
  constructor(type, height, width = Cell.DEFAULT_WIDTH) {
    this.height = height;
    this.width = width;
    this.type = type;
  }
}
