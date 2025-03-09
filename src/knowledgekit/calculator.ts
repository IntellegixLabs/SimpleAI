class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Division by zero.");
        }
        return a / b;
    }
}

// Example usage
const calculator = new Calculator();
console.log(calculator.add(5, 3));        // Output: 8
console.log(calculator.subtract(10, 4));  // Output: 6
console.log(calculator.multiply(7, 6));    // Output: 42
console.log(calculator.divide(20, 4));     // Output: 5