const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Simple function to check if a number is prime
function isPrime(number) {
    // 0 and 1 are not prime numbers
    if (number < 2) return false;
    
    // Check if the number is divisible by any number up to its square root
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) return false; // If it is divisible, it's not prime
    }
    
    // If we haven't found any divisors, it's prime
    return true;
}

// Function to filter prime numbers from an array using Array.prototype.filter()
function filterPrimes(array) {
    // Use the filter method to create a new array with only prime numbers
    return array.filter(isPrime);
}

// Prompt user to enter a list of numbers separated by commas
rl.question('Enter a list of numbers separated by commas: ', (input) => {
    // Split the input string into an array of strings
    let inputArray = input.split(',');

    // Convert the array of strings into an array of numbers
    let numbersArray = inputArray.map(str => parseInt(str.trim()));

    // Filter prime numbers from the array
    let primeNumbers = filterPrimes(numbersArray);

    // Output the prime numbers
    console.log("Prime numbers in the list:", primeNumbers);

    rl.close();
});