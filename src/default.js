import { generatDefaultePassword } from '../src/index.js';

// Define arguments
let length = process.argv[2] || 10;
let includeUppercase = process.argv[3] === 'true';
let includeNumbers = process.argv[4] === 'true';
let includeSymbols = process.argv[5] === 'true';

// validate if process.argv[2], process.argv[3], process.argv[4] and process.argv[5] are not empty
if (!process.argv[2] || !process.argv[3] || !process.argv[4] || !process.argv[5]) {
    console.log('Please, insert the arguments to generate a default password');
    process.exit(1);
}

// Call the function

let password = generatDefaultePassword(length, includeUppercase, includeNumbers, includeSymbols);
console.log(password);