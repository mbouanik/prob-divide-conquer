function sortedFrequency(arr, num) {
  let firstIn = firstInx(arr, num, 0, arr.length - 1);
  if (firstIn === -1) {
    return -1;
  }
  let lastInd = lastIndx(arr, num, 0, arr.length - 1);
  if (lastInd === firstIn) {
    return 1;
  }
  return lastInd - firstIn;
}
function firstInx(arr, num, l, r) {
  while (l <= r) {
    let m = Math.floor((r + l) / 2);
    if ((m === 0 || num > arr[m - 1]) && arr[m] === num) {
      return m;
    } else if (num > arr[m]) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return -1;
}

function lastIndx(arr, num, l, r) {
  while (l <= r) {
    let m = Math.floor((r + l) / 2);
    if ((m === arr.length - 1 || num > arr[m + 1]) && arr[m] === m) {
      return m;
    } else if (num < arr[m]) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return m;
}

module.exports = sortedFrequency;
