function correctWord(sentence, wrong, correct) {
    // Using regular expression to replace all occurrences of the wrong word with the correct word
    return sentence.replace(new RegExp('\\b' + wrong + '\\b', 'gi'), correct);
}

// Example usage:
let originalSentence = "This is an example sentance with misspelled words.";
let correctedSentence = correctWord(originalSentence, "sentance", "sentence");
console.log(correctedSentence); // Output: "This is an example sentence with misspelled words."
