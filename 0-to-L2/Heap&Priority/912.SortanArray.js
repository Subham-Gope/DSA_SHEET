// 912. Sort an Array
// Medium
// Topics
// Companies
// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

 

// Example 1:

// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
// Example 2:

// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessairly unique.
 

// Constraints:

// 1 <= nums.length <= 5 * 104
// -5 * 104 <= nums[i] <= 5 * 104

//////////////////////////////////////////////////////////////////////////////////////////////////

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var sortArray = function(nums) {
//     const n= nums.length;

//     // Heapify function

// function Heapify(nums,n,i) {
//         let largest = i;
//         let leftChild = 2*i+1;
//         let rightChild = 2*i+2;

//         if(leftChild < n && nums[leftChild] > nums[largest]){
//             largest = leftChild;
//         }

// if(rightChild < n && nums[rightChild] > nums[largest]) {
//     largest = rightChild;
// }


// if(largest !== i ) {
//     [nums[i], nums[largest]] = [nums[largest], nums[i]];
// Heapify(nums,n,largest)

// }
// }

//     ////////////////////////

//     // Building the heap

//     for(let i=Math.floor((n/2)-1); i >=0;i--) {
//         Heapify(nums,n,i)
//     }
// ////////////////////////////////////

// //Max Heap Sorting Phase

// for(let i=n-1; i > 0 ;i--) {
//     [nums[0],nums[i]]=[nums[i], nums[0]];

//     Heapify(nums, i, 0);
// }
// /////////////////////////
//     return nums;
// };