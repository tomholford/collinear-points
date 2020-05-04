import Point2D from './point2d';

function initializePoints(array) {
  return array.map(p => new Point2D(p[0], p[1]));
}

function isCollinear(p1, p2, p3) {
  if((p3.y - p2.y) * (p2.x - p1.x) == (p2.y - p1.y) * (p3.x - p2.x)) {
    return true;
  } else {
    return false;
  }
}

function naiveCountCollinear(points) {
  let count = 0;

  for (let x = 0; x < points.length; x++) {
    for (let y = x + 1; y < points.length; y++) {
      for (let z = y + 1; z < points.length; z++) {
        if(isCollinear(points[x], points[y], points[z])) {
          count += 1;
        }
      }
    }
  }

  return count;
}

// execution
const input = [[0, 0], [1, 1], [2, 2], [3, 3], [3, 2], [4, 2], [5, 1]];
const points = initializePoints(input);

console.log(naiveCountCollinear(points));
