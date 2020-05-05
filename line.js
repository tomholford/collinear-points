class Line {
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  }

  get slope() {
    return this.calcSlope();
  }

  calcSlope() {
    return (this.p2.y - this.p1.y) / (this.p2.x - this.p1.x);
  }

  calculateYIntercept(p) {
    return p.y - (this.slope * p.x);
  }

  isPointLiesOn(p) {
    return p.y - this.p1.y === this.slope * (p.x - this.p1.x); 
  }
}

export default Line;