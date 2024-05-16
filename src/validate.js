import { validatePassword } from '../src/index.js';

// Define arguments
let password = process.argv[2];

// Validate if user inserted a password
if(!password) {
    console.log('Please, insert a password to validate');
    process.exit(1);
}

// Call the function
validatePassword(password);