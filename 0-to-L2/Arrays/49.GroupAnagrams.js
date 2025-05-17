// // // 49. Group Anagrams
// // // Medium
// // // Topics
// // // Companies
// // // Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// // // Example 1:

// // // Input: strs = ["eat","tea","tan","ate","nat","bat"]

// // // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// // // Explanation:

// // // There is no string in strs that can be rearranged to form "bat".
// // // The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// // // The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
// // // Example 2:

// // // Input: strs = [""]

// // // Output: [[""]]

// // // Example 3:

// // // Input: strs = ["a"]

// // // Output: [["a"]]

// // // Constraints:

// // // 1 <= strs.length <= 104
// // // 0 <= strs[i].length <= 100
// // // strs[i] consists of lowercase English letters.

// // ////////////////////////////////////////////////////////

// // var groupAnagrams = function(strs) {
// //   const strsLen= strs.length;
// // const hashMap={};

// // for(let i=0;i<strsLen;i++) {
// //     let str = strs[i];
// //      let sortedStr = str.split("").sort((a,b)=>a.localeCompare(b)).join("");

// //     if(!hashMap[sortedStr]){
// //         hashMap[sortedStr] = [str]
// //     } else {
// //         hashMap[sortedStr].push(str)
// //     }
// // }

// // const result=[];

// // for(let key in hashMap) {
// //     result.push(hashMap[key])
// // }
// // return result
// // };

// //////////////////////////////////////////////////////////////////////////////////////////////////////////


// /**
//  * @param {string[]} strs
//  * @return {string[][]}
//  */

// var CharCount = function(str){
//     const charCountArr = Array.from({length:26}, ()=>0);

//     for(let i=0;i<str.length;i++) {
//         charCountArr[str.codePointAt(i) - 97]++
//     }

//     let charCountString ="";

//     for(let j=0;j<26;j++) {
//         charCountString += String.fromCharCode(j+97)+charCountArr[j]
//     }
//     return charCountString;
// }


// var groupAnagrams = function(strs) {
//     const hashMap ={};

//     for(let i=0;i<strs.length;i++ ){
//         let str = strs[i];
//         let charCountString = CharCount(str);

//         if(!hashMap[charCountString]) {
//             hashMap[charCountString] = [str]
//         } else {
//             hashMap[charCountString].push(str)
//         }

//     }

//     const result = [];

//     for(let key in hashMap) {
// result.push(hashMap[key])
//     }

//     return result;
// };