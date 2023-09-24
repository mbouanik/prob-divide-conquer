function findFloor(arr, num) {
  let l = 0;
  let r = arr.length - 1;
  let res = -1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (arr[m] <= num) {
      res = arr[m];
    }
    if (arr[m] < num) {
      l = m + 1;
    } else if (arr[m] > num) {
      r = m - 1;
    }
  }
  return res;
}

module.exports = findFloor;
