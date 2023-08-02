const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Hello"];

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// const arr = array.map((i, index, array) => {
//   return i + 1;
// });

// console.log(arr);

// const test2 = array.forEach((i, index, array) => {
//     array[index] = i + 1;
// });

// console.log(array);

// const test3 = array.filter((i, index, array) => {
//   return i > 5;
// });

// console.log(test3);

// const test4 = array.find((i, index, array) => {
//     return i > 5;
//   });
  
// console.log(test4);

// const test5 = array.reduce((pre, cur, index, array) => {
//     // console.log(pre, cur);
//     return pre + cur;
// },0)
  
// console.log(test5);

//some, every, inc
//condition, return boolean

const condition = array.every((i, index, array) => {
    return i > 1;
})

// console.log(condition);

console.log(array.includes("Hello"));