import { performance } from 'perf_hooks';

export const howLong = (iterations, testFunction, args) => {
  let results = [];
  let total = 0;
  for (let i = 0; i < iterations; i++) {
    const start = performance.now();
    testFunction(args);
    const end = performance.now();
    const duration = end - start;
    results.push(duration);
    total += duration;
  }
  const result = {
    results: results,
    total: total,
    avg: total / results.length,
  };
  return result;
}
