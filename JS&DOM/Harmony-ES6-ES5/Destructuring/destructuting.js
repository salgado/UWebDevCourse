// Traditional way to extract valiues form an array
const point = [10, 25, -34];

const x = point[0];
const y = point[1];
const z = point[2];

console.log(x, y, z);


// Destructuring from an array
const point2 = [10, 25, -34];

const [a, b, c] = point2;

console.log(a, b, c);
// The [ ] represnts the array
// a, b, c are the variables used to store 10, 25, -34
// No index specification required

// Traditional way to extract values from an object
const infinityStone = {
    type: 'power',
    color: 'purple',
    carat: 21.29
  };
  
  const type = infinityStone.type;
  const color = infinityStone.color;
  const carat = infinityStone.carat;
  
  console.log(type, color, carat);

//   Destructuring values from an object

const infinityGem = {
    types: 'mind',
    colors: 'orange',
    carats: 26.29
  };
  
  const {types, colors, carats} = infinityGem;
  
  console.log(types, colors, carats);
// The { } represnts the object being destructured
// types, colors and carats are the variables used to store 'mind', 'orange' and 26.29
// It is not necessary to to specify the property from where to extract the values. 
// Because gemstone has a property named type, the value is automatically stored in the type variable.


// Print specific values from an array while destructuring
const circle = {
    radius: 10,
    color: 'orange',
    getArea: function() {
      return Math.PI * this.radius * this.radius;
    },
    getCircumference: function() {
      return 2 * Math.PI * this.radius;
    }
  };
  
  let {radius, getArea, getCircumference} = circle;

  console.log(circle);


const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

const [one, , , two, , , ,three] = things;

console.log(`List of colors: 
1. ${one} 
2. ${two} 
3. ${three}`);