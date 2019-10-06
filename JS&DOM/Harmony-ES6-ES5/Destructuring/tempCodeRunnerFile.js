const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

const [one, , , two, , , ,three] = things;

console.log(`List of colors: 
1. ${one} 
2. ${two} 
3. ${three}`);