function repeatedSumOfDigits(number) {
    // Convert the number to a string to iterate over its digits
    let numString = number.toString();
    
    // Calculate the sum of digits
    let sum = numString.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    
    // If the sum is a single digit, return it
    if (sum < 10) {
        return sum;
    }
    
    // Otherwise, recursively call the function with the sum
    return repeatedSumOfDigits(sum);
}

// Example usage:
console.log(repeatedSumOfDigits(456)); // Output: 6
