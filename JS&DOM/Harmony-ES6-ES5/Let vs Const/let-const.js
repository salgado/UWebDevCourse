/*
  *  Because of hoisting (i.e variables fressing and hot are scoped at the top of the function),
  the function getClothing(false); returns undefined
  */

function getClothing(isCold) {
    if (isCold) {
        var freezing = 'Grab a jacket!';
    } else {
        var hot = 'It’s a shorts kind of day.';
        console.log(freezing);
    }
}
getClothing(false);
// Undefined

function getClothing(isCold) {
    if (isCold) {
        const freezing = 'Grab a jacket!';
    } else {
        const hot = 'It’s a shorts kind of day.';
        console.log(freezing);
    }
}
getClothing(false);
  // ReferenceError: freezing is not defined

  /**
   * Now freezing, is not defined, because it's stuck in the 
   * temporal dead zone of the first IF.
   * const variables cannot be re-declared (like static in Java)
   */

  let instructor = 'James';
  instructor = 'Richard';

  console.log(instructor);
  // Richard

  /**
   * In this example instead, the result is Richard, because let variables
   * can be riassigned.
   */