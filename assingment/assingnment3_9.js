function countWords(paragraph) {
    // Split the paragraph into words using whitespace as delimiter
    const words = paragraph.split(/\s+/);
    
    // Count the number of words
    const wordCount = words.length;
    
    return wordCount;
}

// Example usage:
const paragraph = "This is a sample paragraph with some words.";
console.log(countWords(paragraph)); // Output: 8
