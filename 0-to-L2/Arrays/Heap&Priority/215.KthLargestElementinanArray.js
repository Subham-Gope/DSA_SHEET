// // Given an integer array nums and an integer k, return the kth largest element in the array.

// // Note that it is the kth largest element in the sorted order, not the kth distinct element.

// // Can you solve it without sorting?

// // Example 1:

// // Input: nums = [3,2,1,5,6,4], k = 2
// // Output: 5
// // Example 2:

// // Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// // Output: 4

// // Constraints:

// // 1 <= k <= nums.length <= 105
// // -104 <= nums[i] <= 104

// ///////////////////////////////////////////////////


// var findKthLargest = function(nums, k) {
//     const n = nums.length;


// // minHeapify Function
// const minHeapify = (arr,lengthOfArr, indexOfParentNode) => {

// let smallest = indexOfParentNode;
// let leftChild = 2*indexOfParentNode + 1;
// let rightChild = 2*indexOfParentNode + 2;

// if(leftChild<lengthOfArr && nums[leftChild]<nums[smallest]){
// smallest = leftChild
// }

// if(rightChild  < lengthOfArr && nums[rightChild] < nums[smallest]) {
//     smallest = rightChild;
// }
 
//  if(smallest !== indexOfParentNode) {
//     [nums[indexOfParentNode],nums[smallest]]  = [nums[smallest], nums[indexOfParentNode]];
//     minHeapify(arr,lengthOfArr,smallest)
//  }

//     }

//     /////////////////////////////////////////

// // Building the min Heap

// for(let i =Math.floor((n-1)/2); i>=0; i--) {
//     minHeapify(nums, n, i);
// }

// /////////////////////////////////////////////

// // min heap sort by popping the smallest element from the 0 index to last
// for (let i= n-1; i>=0 ; i--) {
//   [nums[0] , nums[i]] = [nums[i] , nums[0]];
//   minHeapify(nums,i,0);

// }
// ////////////////////////////////////////////////////////////////////////////
// return nums[k-1];

// }