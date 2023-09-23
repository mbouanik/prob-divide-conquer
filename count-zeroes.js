function countZeroes(arr) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if ((m === 0 || arr[m - 1] === 1) && arr[m] === 0) {
      return arr.length - m;
    } else if (arr[m] != 0) {
      l = m + 1;
    } else if (arr[m] === 0) {
      r = m - 1;
    }
  }
  return 0;
}

console.log(countZeroes([1, 1, 1, 1, 0, 0]));
console.log(countZeroes([1, 1, 1, 1, 1, 1]));
console.log(countZeroes([1, 1, 1, 0, 0, 0]));
console.log(countZeroes([1, 1, 0, 0, 0, 0]));
console.log(countZeroes([1, 0, 0, 0, 0, 0]));
console.log(countZeroes([0, 0, 0, 0, 0, 0]));

module.exports = countZeroes;
