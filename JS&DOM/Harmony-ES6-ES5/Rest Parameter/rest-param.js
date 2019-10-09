// Basically, it condenses in a single variable multiple elements of an array

const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
// items now contains = "cheese", "eggs", "milk", "bread"
console.log(total, subtotal, tax, items);

//  Another example

printPackageContent('cheese', 'eggs', 'milk', 'bread');
function printPackageContent(...items) {
    for (const item of items) {
        console.log(item);
    }
}

// Another useful case: Variadic functions

function sum(...nums) {
    let total = 0;
    for (const num of nums) {
        total += num;
    }
    return total;
}
console.log(sum(5, 6));

//  Average 
function average(...nums) {
    let total = 0;
    let average = 0;
    let result = 0;
    for (const num of nums)
        total += num;
    average = nums.length;
    result = total / average;
    if (isNaN(result)) {
        return 0;
    }
    return result;
}


console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());