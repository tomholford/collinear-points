import { initializePoints, isCollinear } from './utils.js';
import { howLong } from './timeit.js';

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

console.log('result:')
console.log(naiveCountCollinear(points));

const result = howLong(1000, naiveCountCollinear, points);
console.log('performance:')
console.log("avg: " + result.avg);
console.log("total: " + result.total);
