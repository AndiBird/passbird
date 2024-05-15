import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const readline = require('readline');

const characters = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_-+=|{}[]:;<>,.?/'
};

export function generatePassword(length, includeUppercase, includeNumbers, includeSymbols) {    

let charSet = characters.lowercase;
if (includeUppercase) charSet += characters.uppercase;
if (includeNumbers) charSet += characters.numbers;
if (includeSymbols) charSet += characters.symbols;

let password = '';
for (let i = 0; i < length; i++) {
    password += charSet[Math.floor(Math.random() * charSet.length)];
}

return password;
}

export function generateMemorablePassword(numWords, includeUppercase, includeNumbers, includeSymbols) {    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      
      rl.question('Please, enter the words separated by commas: ', (answer) => {
        const words = answer.split(',').map(word => word.trim());

        let charSet = characters.lowercase;
        if (includeUppercase) charSet += characters.uppercase;
        if (includeNumbers) charSet += characters.numbers;
        if (includeSymbols) charSet += characters.symbols;
        
        let password = '';
        for (let i = 0; i < numWords; i++) {
          password += words[i];
          password += charSet[Math.floor(Math.random() * charSet.length)];
          //Test if the password contains at least one number, uppercase letter and symbol
            if (i == numWords - 1) {
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
        
        console.log(password);
        rl.close();
      });
}