// Traditional for loop

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < digits.length; i++) {
  console.log(digits[i]);
}
/** Biggest flaw: must keep track of the counter and exit condition.
 * 
 * Prints
 *  0
    1
    2
    3
    4
    5
    6
    7
    8
    9
 */

console.log('**********************************');

 // For...in Loop

 const digit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digit) {
  console.log(digit[index]);
}
/** Biggest flaw: Eliminates the counting logic and exit condition, 
 * but you still have to deal with the issue of using an index to access the values of the array.
 * 
 * Prints
 *  0
    1
    2
    3
    4
    5
    6
    7
    8
    9
 */

 console.log('**********************************');

 // For...of loop
 /* Biggest flaw: None, is the best of both worlds.
  * Biggest advantage: You can stop or break a for...of loop at anytime.
  * Prints
    0
    1
    2
    3
    4
    5
    6
    7
    8
    9
 */

 const digitz = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let digit of digitz) {
  console.log(digit);
}

//Stop the loop at any time
console.log('**************** STOP ******************');

const digitr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digitr) {
  if (digit % 2 === 0) {
    continue; // terminates execution in the current iteration of the current loop, and continues execution of the loop with the next iteration.
  }
  console.log(digit);
}