// // // 242. Valid Anagram
// // // Easy
// // // Topics
// // // Companies
// // // Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// // // Example 1:

// // // Input: s = "anagram", t = "nagaram"

// // // Output: true

// // // Example 2:

// // // Input: s = "rat", t = "car"

// // // Output: false

// // // Constraints:

// // // 1 <= s.length, t.length <= 5 * 104
// // // s and t consist of lowercase English letters.

// // // Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // // var isAnagram = function(s, t) {
// // //   if(s.length !== t.length) {
// // //     return false
// // //   }
// // //   const sortedS = s.split("").sort((a,b)=>a.localeCompare(b)).join("");
// // //   const sortedT = t.split("").sort((a,b)=>a.localeCompare(b)).join("");

// // //   if(sortedS == sortedT) {
// // //     return true
// // //   }
// // //   return false

// // // };

// // //////////////////////////////////////////////////////////////////////////////////////////

// // // var isAnagram = function(s, t) {

// // // const sArr = [...s];
// // // const tArr = [...t];

// // //   if(sArr.length !==tArr.length) {
// // //     return false
// // //   }

// // //   const length = sArr.length;

// // //   let temp1, temp2;

// // //   for(let i =0; i<length-1;i++) {
// // //     for (let j = 0; j<length -1 - i;j++) {
        
// // // // sorting s
// // //         if(sArr[j]>sArr[j+1]){
// // //             temp1 = sArr[j];
// // //             sArr[j] = sArr[j+1];
// // //             sArr[j+1] = temp1;
// // //         }

// // // // sorting t
// // //         if(tArr[j]> tArr[j+1]) {
// // //             temp2= tArr[j];
// // //             tArr[j] = tArr[j+1];
// // //             tArr[j+1] = temp2;
// // //         }
// // //     }
// // //   }


// // //   for(let k=0;k<length;k++) {
// // //     if(sArr[k]!==tArr[k]){
// // //         return false
// // //     }
// // //   }

// // //   return true

// // // };

// // ///////////////////////////////////////////////////////////////////////////////////////////////////

// // var isAnagram = function(s, t) {
// //     if(s.length !== t.length) {
// //         return false
// //     }

// //     const hashMapS={},hashMapT={};

// //     for(let i=0; i<s.length;i++){

// // // hashing for s
// // if(!hashMapS[s[i]]) {
// // hashMapS[s[i]] = 1
// // } else {
// //     hashMapS[s[i]]++
// // }

// // // hashing for t
// // if(!hashMapT[t[i]]) {
// //     hashMapT[t[i]] = 1;

// // } else {
// //     hashMapT[t[i]]++
// // }
// //     } ;

// // for(let key in hashMapS){
// //     if(hashMapS[key] !==hashMapT[key]){
// //         return false
// //     }
// // }

// // return true

// // }

// ////////////////////////////////////////////////////////////////////////////////

// var isAnagram = function(s, t) {
//     if(s.length !== t.length) {
//         return false
//     }

//     const hashMap={};

//     for(let i=0;i<s.length;i++) {
//         if(!hashMap[s[i]]) {
//             hashMap[s[i]]  = 1;
//         } else  {
//             hashMap[s[i]]++
//         } 

//         if(!hashMap[t[i]]) {
//             hashMap[t[i]] = -1
//         } else {
//             hashMap[t[i]]--
//         }

//     }

//     for(let key in hashMap) {
//         if(hashMap[key] !== 0) {
//             return false
//         }
//     }
//     return true
// };