import axios from 'axios';
import sha1 from 'sha1';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const readline = require('readline');

// characters to be used in the password
const characters = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_-+=|{}[]:;<>,.?/'
};

// generate a random password (default type)
export function generatDefaultePassword(length, includeUppercase, includeNumbers, includeSymbols) {
    // create a character set based on the options
    let charSet = characters.lowercase;
    if (includeUppercase) charSet += characters.uppercase;
    if (includeNumbers) charSet += characters.numbers;
    if (includeSymbols) charSet += characters.symbols;
    // generate the password
    let password = '';
    for (let i = 0; i < length; i++) {
        password += charSet[Math.floor(Math.random() * charSet.length)];
        //Test if the password contains at least one number, uppercase letter and symbol
        if (i == length - 1) {
            if (includeNumbers) {
                password += characters.numbers[Math.floor(Math.random() * characters.numbers.length)];
            }
            if (includeUppercase) {
                password += characters.uppercase[Math.floor(Math.random() * characters.uppercase.length)];
            }
            if (includeSymbols) {
                password += characters.symbols[Math.floor(Math.random() * characters.symbols.length)];
            }
        }
    }
    // print the password
    console.log(password);
    // validate the password
    validatePassword(password);
}

// generate a memorable password (memorable type)
export function generateMemorablePassword(includeUppercase, includeNumbers, includeSymbols) {
    // create an interface to read user input
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    // ask the user to enter words separated by commas
    rl.question('Please, enter the words separated by commas: ', (answer) => {
        // split the answer into an array of words
        const words = answer.split(',').map(word => word.trim());
        // create a character set based on the options
        let charSet = characters.lowercase;
        if (includeUppercase) charSet += characters.uppercase;
        if (includeNumbers) charSet += characters.numbers;
        if (includeSymbols) charSet += characters.symbols;
        // generate the password
        let password = '';
        for (let i = 0; i < words.length; i++) {
            password += words[i];
            password += charSet[Math.floor(Math.random() * charSet.length)];
            //Test if the password contains at least one number, uppercase letter and symbol
            if (i == words.length - 1) {
                if (includeNumbers) {
                    password += characters.numbers[Math.floor(Math.random() * characters.numbers.length)];
                }
                if (includeUppercase) {
                    password += characters.uppercase[Math.floor(Math.random() * characters.uppercase.length)];
                }
                if (includeSymbols) {
                    password += characters.symbols[Math.floor(Math.random() * characters.symbols.length)];
                }
            }
        }
        // print the password
        console.log(password);
        // validate the password
        validatePassword(password);
        // ask the user if is satisfied with the password
        rl.question('Are you satisfied with the password? (y/n) ', (answer) => {
            // if the user is not satisfied, generate a new password
            if (answer === 'n' || answer === 'no') {
                // close the interface
                rl.close();
                console.log(generateMemorablePassword(includeUppercase, includeNumbers, includeSymbols));
            } else {
                // close the interface
                rl.close();
            }
        })
        return password;
    });
}

export function validatePassword(password) {
    // Convert password to hash SHA-1
    let hash = sha1(password).toUpperCase();

    // Send first 5 char to API HIB
    axios.get(`https://api.pwnedpasswords.com/range/${hash.substring(0, 5)}`)
        .then(response => {
            // Look for complete hash in the list of hashes returned by the API
            if (response.data.includes(hash.substring(5))) {
                console.warn('\nWarn:\nPassword has been exposed in previous data breaches.');
            } else {
                console.log('\nNote:\nPassword is secure and is not exposed in data breaches.');
            }
        })
        .catch(error => {
            console.error('\nError while validating generated password:', error);
        });
};