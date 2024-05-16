import { generateMemorablePassword } from '../src/index.js';

// Define arguments
let includeUppercase = process.argv[2] === 'true';
let includeNumbers = process.argv[3] === 'true';
let includeSymbols = process.argv[4] === 'true';

// validate if process.argv[2], process.argv[3] and process.argv[4] are not empty
if (!process.argv[2] || !process.argv[3] || !process.argv[4]) {
    console.log('Please, insert the arguments to generate a memorable password');
    process.exit(1);
}

// Call the function
generateMemorablePassword(includeUppercase, includeNumbers, includeSymbols);