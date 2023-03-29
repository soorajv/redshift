// Task 1
// Find the first recurring character of the following lists and analyze the runtime vs space trade-off of your solution

const findFirstRecurringChar = (arr) => {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      return arr[i];
    } else {
      map.set(arr[i], i);
    }
  }

  return undefined;
};
const findFirstRecurringCharInLists = (lists) => {
  for (let i = 0; i < lists.length; i++) {
    const result = findFirstRecurringChar(lists[i]);
    console.log(result);
  }
};

const task1 = [
  [2, 5, 1, 2, 3, 5, 1, 2, 4],
  [2, 1, 1, 2, 3, 5, 1, 2, 4],
  [2, 3, 4, 5],
  [2, 5, 5, 2, 3, 5, 1, 2, 4],
];

findFirstRecurringCharInLists(task1);

/*
The space complexity of the solution is O(n) 
as the algorithm uses Map to store the elements of the  array, and the size of this data structure grows linearly
 with the size of the input array
  The time complexity of the solution is O(n) because the algorithm performs a constant amount of work for each element in the array. 
 */
