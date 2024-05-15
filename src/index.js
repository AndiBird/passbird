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
    return password;
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
        // shuffle the password to make it more secure
        //shufflePassword(password);
        // print the password
        console.log(password);
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
        });
    });
}

function shufflePassword(password) {
    return password.split('').sort(() => Math.random() - 0.5).join('');
}