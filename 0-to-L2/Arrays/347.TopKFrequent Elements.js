// // 347. Top K Frequent Elements
// // Medium
// // Topics
// // Companies
// // Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// // Example 1:

// // Input: nums = [1,1,1,2,2,3], k = 2
// // Output: [1,2]
// // Example 2:

// // Input: nums = [1], k = 1
// // Output: [1]

// // Constraints:

// // 1 <= nums.length <= 105
// // -104 <= nums[i] <= 104
// // k is in the range [1, the number of unique elements in the array].
// // It is guaranteed that the answer is unique.

// // Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var topKFrequent = function(nums, k) {
//     const n = nums.length;
//     const freqMap={};
//     const bucketArr= Array.from({length:n+1},()=>[]);
//     const result=[];

// // Creating the frequency map
//     for(let num of nums) {
//         freqMap[num] = (freqMap[num] || 0) + 1;
//     }
// ////////////////////////////////

// //Populating the  Bucket Array

// for(let [key,value] of Object.entries(freqMap)) {
//     bucketArr[value].push(Number(key));
// }

// /////////////////////////////////

// // Building the result array from bucket array
// for(let i=n; i>=0 && result.length < k; i--) {
//     if(bucketArr[i].length > 0) {
//         result.push(...bucketArr[i])
//     }
// }
// /////////////////////////////////////////////////////////

// return result;
// };