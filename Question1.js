const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to swap the case of each character in a string
function swapCase(inputString) {
    // Using regular expression to replace alphabetic characters with their swapped case
    return inputString.replace(/[a-zA-Z]/g, function(char) {
        // If character is lowercase, convert to uppercase; otherwise, convert to lowercase
        return char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
    });
}


// Using readline to get user input
rl.question('Enter a string: ', (inputString) => {
    // Calling the swapCase function with the user input string
    let outputString = swapCase(inputString);
    // Output the swapped string
    console.log(outputString);
    // Close the readline interface
    rl.close();
});
