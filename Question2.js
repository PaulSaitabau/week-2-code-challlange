// Function to generate an array of numbers from start to end (inclusive)
function generateArray(start, end) {
    // Initialize an empty array to store the generated numbers
    let array = [];
    // Loop from start to end (inclusive)
    for (let i = start; i <= end; i++) {
        // Push each number into the array
        array.push(i);
    }
    // Return the generated array
    return array;
}

// Example usage
// Generating an array from 4 to 7 (inclusive)
let result = generateArray(4, 7);
console.log(result); // Output: [4, 5, 6, 7]

// Generating an array from -4 to 7 (inclusive)
result = generateArray(-4, 7);
console.log(result); // Output: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]