const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let numPop = nums.pop();
//console.log(numPop)
let numPop1 = nums.pop();
//console.log(numPop1)
// remove each of the first two items with shift(), saving each item to a variable
let secondShift = nums.shift();
console.log(secondShift);
// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.unshift(0);

