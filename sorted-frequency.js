function sortedFrequency(arr, num) {}

module.exports = sortedFrequency;

sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2); // 4
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3); // 1
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1); // 2
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4); // -1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2));
