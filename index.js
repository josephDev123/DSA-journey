const binarySearch = (arr, target) => {
  let lo = 0;
  let hi = arr.length;

  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);

    if (arr[mid] === target) {
      return arr[mid];
    } else if (arr[mid] > target) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return false;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 12;

const result = binarySearch(arr, target);
console.log(`${target} is found at index ${result}`);
