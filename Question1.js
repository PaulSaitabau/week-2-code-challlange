function swapCase(inputString) {
    // Initialize an empty string to store the result
    let result = "";
    
    // Iterate over each character in the input string
    for (let i = 0; i < inputString.length; i++) {
        // Get the current character
        let char = inputString[i];
        
        // Check if the character is uppercase
        if (char === char.toUpperCase()) {
            // Convert the character to lowercase and append it to the result
            result += char.toLowerCase();
        } else {
            // Convert the character to uppercase and append it to the result
            result += char.toUpperCase();
        }
    }
    
    // Return the result string
    return result;
}