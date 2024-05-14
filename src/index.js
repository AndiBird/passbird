export function generatePassword(length, includeUppercase, includeNumbers, includeSymbols) {    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_-+=|{}[]:;<>,.?/';

let characters = lowercase;
if (includeUppercase) characters += uppercase;
if (includeNumbers) characters += numbers;
if (includeSymbols) characters += symbols;

let password = '';
for (let i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
}

return password;
}

const words = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew'];

export function generateMemorablePassword(numWords) {    
    let password = '';
    for (let i = 0; i < numWords; i++) {
        password += words[Math.floor(Math.random() * words.length)];
        if (i < numWords - 1) password += ' ';
    }
    return password;
}