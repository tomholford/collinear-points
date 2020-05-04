class Point2D  {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  isEqual(p) {
    return (this.x === p.x) && (this.y === p.y);
  }
}

export default Point2D;