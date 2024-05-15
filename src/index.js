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

//const words = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew'];

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
          password += words[Math.floor(Math.random() * words.length)];
          password += charSet[Math.floor(Math.random() * charSet.length)];
        }

        checkIfCharSetIncluded(password, words);
        
        console.log(password);
        rl.close();
      });
}

function checkIfCharSetIncluded(password, words, numWords) {
    let isCharSetIncluded = 0;
    for (let i = 0; i < words.length; i++) {
        if(password.includes(words[i])) {
            isCharSetIncluded = isCharSetIncluded + 1;
            if(isCharSetIncluded === numWords) {
                break;
            }
        }
    }
}