// 217. Contains Duplicate
// Solved
// Easy
// Topics
// Companies
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]

// Output: true

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

/////////////////////////////////////////////////////////////////////////////

var containsDuplicate = function (nums) {
  const length = nums.length;
  const set = new Set(nums);
  const setLen = set.size;

  if (length == setLen) {
    return false;
  }
  return true;
};

// //////////////////////////////////////////////////////////////////

var containsDuplicate = function (nums) {
  const len = nums.length;
  const hashMap = new Map();

  for (let i = 0; i < len; i++) {
    if (hashMap.has(nums[i])) {
      return true;
    } else {
      hashMap.set(nums[i], i);
    }
  }
  return false;
};
