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