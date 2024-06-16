let string = 'INDIA';

// Convert the string to an array of characters
let charArray = string.split('');

// Use splice to replace 'A' at the end with 'ONESIA'
charArray.splice(charArray.length - 1, 1, 'O', 'N', 'E', 'S', 'I', 'A');

// Join the array back into a string
let newString = charArray.join('');

console.log(newString); // Output: 'INDONESIA'
