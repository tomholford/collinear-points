import Line from './line.js';
import { initializePoints, isCollinear } from './utils.js';
import { howLong } from './timeit.js';

function optimizedCountCollinear(points) {
  let count = 0;

  for (let x = 0; x < points.length; x++) {
    for (let y = x + 1; y < points.length; y++) {
      const l = new Line(points[x], points[y]);
      const set = new Set();
      for (let z = 0; z < points.length; z++) {
        const p = points[z];
        if(l.isPointLiesOn(p)) {
          set.add(p);
        }
      }
      if(set.size === 3) {
        count += 1;
      }
    }
  }
  return count;
}

// execution
const input = [[0, 0], [1, 1], [2, 2], [3, 3], [3, 2], [4, 2], [5, 1]];
const points = initializePoints(input);

console.log('result:')
console.log(optimizedCountCollinear(points));

const result = howLong(1000, optimizedCountCollinear, points);
console.log('performance:')
console.log("avg: " + result.avg);
console.log("total: " + result.total);
