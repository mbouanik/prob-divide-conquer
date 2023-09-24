function findRotationCount(arr) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (arr[m] > arr[m + 1]) {
      return m + 1;
    } else if (arr[l] > arr[m]) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return 0;
}
module.exports = findRotationCount;
