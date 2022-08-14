/*
Problem - 1
Checking sum zero 
[-5,-4,-3,-2,0,2,4,6,8] -> input
[-4, 4] -> output
*/

// Solution - 1

// function getSumPairZero(arr) {
//   for (let number of arr) {
//     for (let i = 1; i < arr.length; i++) {
//       if (number + arr[i] === 0) {
//         return [number, arr[i]];
//       }
//     }
//   }
// }
// const result = getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
// console.log(result);

// Solution - 2 Optimized Solution

// function findSumPairZero(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     sum = arr[left] + arr[right];
//     if (sum === 0) {
//       return [arr[left], arr[right]];
//     } else if (sum > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }
// }
// const result = findSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
// console.log(result);

/*
Problem - 2
Checking String Anagram
"awesome" -> "someewa"
"wow" -> "wwo"
"hello" -> "lolhe"
*/

// Condition
// 1. length check (for both strings)
// 2. String "awesome"
// 3. output -> {a:0, w:0, e:0, s:0, o:0, m:0, e:0}

// Solution - 1

// function isAnagram(string1, string2) {
//   if (string1.length !== string2.length) {
//     return false;
//   }
//   let count = {};
//   for (let letter of string1) {
//     count[letter] = (count[letter] || 0) + 1;
//     console.log(count[letter]);
//   }
//   for (let items of string2) {
//     if (!count[items]) {
//       return false;
//     }
//     count[items] -= 1;
//   }
//   return true;
// }
// const check = isAnagram("awesome", "someewa");
// console.log(check);

// linear time complexity o(n)

/*
Problem - 3
Count Unique Number
                  i, j
input -> array = [1, 1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9, 9, 9, 9, 9, 10]
output -> 10
*/

// Condition;
// 1. i=0 , j=1
// 2. arr[i] !== arr[j]
// 3. i++
// 4. arr[i] = arr[j]

// Solution - 1

// function uniqueNumber(arr) {
//   if (arr.length) {
//     let i = 0;
//     for (let j = 1; j < arr.length; j++) {
//       if (arr[i] !== arr[j]) {
//         i++;
//         arr[i] = arr[j];
//       }
//     }
//     return i + 1;
//   } else {
//     throw new Error(Array is empty);
//   }
// }
// const result = uniqueNumber([
//   1, 1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9, 9, 9, 9, 9, 10,
// ]);
// console.log(result);

// o(n) linear time complexity

/*
Problem - 4
Count largest number of consecutive digits
[1, 2, 3, 5, 3, 6, 4, 7, 8, 4] = total elements - 10
num = 4
sum => 25
*/

// Conditions
// 1. num > arr => err
// 2. 10 - 3 + 1

// Solution - 1

// function largestConsecutiveNumber(arr, num) {
//   if (num > arr) {
//     throw new Error("Number is not greater than array");
//   } else {
//     let max = 0;
//     for (let i = 0; i < arr.length - num + 1; i++) {
//       let x = 0;
//       for (let j = 0; j < num; j++) {
//         x += arr[i + j];
//       }
//       if (x > max) {
//         max = x;
//       }
//     }
//     return max;
//   }
// }
// const result = largestConsecutiveNumber([1, 2, 3, 5, 3, 6, 4, 7, 8, 6], 3);
// console.log("result", result);

/*
Problem - 5
Divide & Conquere Technique
Find the index of given no in a sorted arr 11
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] => index 10 output
*/

// Condition
// 1. min=0, element=1
// 2. max=arr.length-1, element=15
// 3. minindex=(min+max)/2 => (0+14)/2 => 7(index), element =8
// 4. if arr(minIndex) < number(7)
// 5. min = minIndex + 1;
// 6. else if arr(minIndex) > number
// 7. max = minIndex - 1, min=0, max=6     {1, 2, 3, 4, 5, 6, 7}
// 8. (min + max)/2 => 3
// 9. index+1 => 4(min), max=6 {5,6,7}
// 10. (min + max)/2 => 5+1 => 6(min) , max=6
// 11. (min + max)/2 => 6
// 12. else minIndex => 6 , element =7

// Solution - 1

// function searchIndex(arr, num) {
//   let min = 0;
//   let max = arr.length - 1;
//   while (min <= max) {
//     let midIndex = Math.floor((min + max) / 2);
//     console.log(`midIndex ${midIndex} min ${min} max ${max}`);
//     if (arr[midIndex] < num) {
//       min = midIndex + 1;
//     } else if (arr[midIndex] > num) {
//       max = midIndex - 1;
//     } else {
//       return midIndex;
//     }
//   }
//   return -1;
// }
// const result = searchIndex(
//   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
//   13
// );
// console.log("result", result);

// time complexity is binary O(log(n))

/*
Problem - 6
Checking Squra in Another Array
arr1 = [1, 2, 3, 4, 5], arr2 = [1, 4, 9, 16, 25]
*/

// Condition
// 1. if (arr[i] * arr[i] === arr[j])
// 2. let isSquare = true
