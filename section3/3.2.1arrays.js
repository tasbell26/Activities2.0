// create an Array using an Array literal
const y = [5, 'five', 20, true];
// access the 1st item in the Array
console.log(y[0]);
// access the last item in the Array
console.log(y.length -1);
// print the length of the Array
console.log(y.length);
// use the length property to access the last item in the Array

// with for...of, loop over the Array, modify the value and add to a different Array
for (let element of something) {
    let newElement = element + 1;
}