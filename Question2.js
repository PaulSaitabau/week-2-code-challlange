function generateArrayBetween(start, end) {
    // Initialize an empty array to store the numbers
    let numbers = [];
    
    // Determine the starting point and the step based on the direction
    let step = start < end ? 1 : -1;
    let current = start;
    
    // Loop until the current number reaches the end number
    while (current <= end || current >= end) {
        // Add the current number to the array
        numbers.push(current);
        
        // Move to the next number in the sequence
        current += step;
    }
    
    // Return the array of numbers
    return numbers;
}