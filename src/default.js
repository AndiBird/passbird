import { generatDefaultePassword } from '../src/index.js';

// Define arguments
let length = process.argv[2] || 10;
let includeUppercase = process.argv[3] === 'true' || true;
let includeNumbers = process.argv[4] === 'true' || true;
let includeSymbols = process.argv[5] === 'true' || true;

// Call the function

let password = generatDefaultePassword(length, includeUppercase, includeNumbers, includeSymbols);
console.log(password);