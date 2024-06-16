let str = 'I love my India';

// Split the string into an array of words
let wordsArray = str.split(' ');

// Reverse the array of words
let reversedWordsArray = wordsArray.reverse();

// Join the reversed array back into a string
let reversedStr = reversedWordsArray.join(' ');

console.log(reversedStr); // Output: 'India my love I'
