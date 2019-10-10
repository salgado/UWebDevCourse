// Repetitive code - same property names used for the variables storing the values
let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
  type: type,
  color: color,
  carat: carat
};

console.log(gemstone);


// Can be written as shorthand if the properties have the same name as the variables being assigned to them.

let types = 'time';
let colors = 'blue';
let carats = 2000;

const gemstones = {types, colors, carats};
console.log(gemstones);

// Also, assigning functions to objects using shorthands does not require the function keyword

let gemstones = {
    types,
    colors,
    carats,
    calculatePower() {

    }
};