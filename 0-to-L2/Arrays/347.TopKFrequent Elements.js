// 347. Top K Frequent Elements
// Medium
// Topics
// Companies
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
 

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const freqMap = {}; // Step 1: Count frequency of each element

    for (let num of nums) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }

    const bucket = Array(nums.length + 1).fill().map(() => []); // Step 2: Bucket where index = frequency

    // Step 3: Place elements into buckets based on frequency
    for (let num in freqMap) {
        const freq = freqMap[num];
        bucket[freq].push(Number(num));
    }

    const result = [];

    // Step 4: Collect top k frequent elements from highest frequency to lowest
    for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
        for (let num of bucket[i]) {
            result.push(num);
            if (result.length === k) break;
        }
    }

    return result;