/**
 * Old way to concatenate strings
 */

const student = {
    name: 'Richard Kalehoff',
    guardian: 'Mr. Kalehoff'
  };
  
  const teacher = {
    name: 'Mrs. Wilson',
    room: 'N231'
  }
  
  let message = student.name + ' please see ' + teacher.name + ' in ' + teacher.room + ' to pick up your report card.';
  console.log(message);

//   Template literals

message = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`;
console.log(message);

// Another
const myName = 'Matteo';
const greeting = `Hello, my name is ${myName}`;
console.log(greeting);