import Point2D from './point2d.js';

export const initializePoints = (array) => {
  return array.map(p => new Point2D(p[0], p[1]));
}

export const isCollinear = (p1, p2, p3) => {
  return (p3.y - p2.y) * (p2.x - p1.x) === (p2.y - p1.y) * (p3.x - p2.x);
}