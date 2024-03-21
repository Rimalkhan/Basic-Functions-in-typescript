
// Function to calculate the area of a rectangle
function calculateArea(length, width) {
    return length * width;
}
// Function to greet a person
function greet(name) {
    return `Hello, ${name}!`;
}
// Function with optional parameter
function greetOptional(name) {
    if (name) {
        return `Hello, ${name}!`;
    }
    else {
        return `Hello, stranger!`;
    }
}
// Function with default parameter
function greetDefault(name = "stranger") {
    return `Hello, ${name}!`;
}
// Function with rest parameter
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
// Test the functions
console.log(calculateArea(5, 3)); // Output: 15
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greetOptional()); // Output: Hello, stranger!
console.log(greetDefault()); // Output: Hello, stranger!
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
