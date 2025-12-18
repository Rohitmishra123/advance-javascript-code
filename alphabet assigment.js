function rotateRight(arr, k) {
  let n = arr.length;
  k = k % n; // handle large k
  if (k === 0) return arr;
  let part1 = arr.slice(-k);
  let part2 = arr.slice(0, n - k);
  return part1.concat(part2);
}