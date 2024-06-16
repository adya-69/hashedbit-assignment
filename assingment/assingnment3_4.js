function countVowelsAndConsonants(str) {
    // Ensure the input string has at least 20 characters
    if (str.length < 20) {
      return 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph..';
    }
  
    // Define vowels
    const vowels = 'AEIOUaeiou';
    let vowelCount = 0;
    let consonantCount = 0;
  
    // Iterate through each character in the string
    for (let char of str) {
      // Check if the character is a letter
      if (char.match(/[a-zA-Z]/)) {
        if (vowels.includes(char)) {
          vowelCount++;
        } else {
          consonantCount++;
        }
      }
    }
  
    return {
      vowels: vowelCount,
      consonants: consonantCount
    };
  }
  
  // Example usage
  let inputString = 'Paragraphs are the building blocks of papers Many students define paragraphs in terms of length a paragraph is a group of at least five sentences a paragraph is half a page long etc In reality though the unity and coherence of ideas amog sentences is what constitutes a paragraph.';
  let result = countVowelsAndConsonants(inputString);
  
  console.log(`Vowels: ${result.vowels}, Consonants: ${result.consonants}`);
  