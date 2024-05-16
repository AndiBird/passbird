#!/usr/bin/env node
import { generatDefaultePassword, generateMemorablePassword, validatePassword } from '../src/index.js';
import inquirer from 'inquirer';


let questions = [
    {
        type: 'list',
        name: 'passwordType',
        message: 'Want to generate a default or memorable password or want to validate a password?',
        choices: ['Default', 'Memorable', 'Validate', 'How to use it in my project'],
        filter: function (val) {
            return val.toLowerCase();
        }
    },
    {
        type: 'input',
        name: 'length',
        message: 'How long do you want the password to be?',
        when: function (answers) {
            return answers.passwordType === 'default';
        }
    },
    {
        type: 'confirm',
        name: 'includeUppercase',
        message: 'Include uppercase letters?',
        default: true,
        when: function (answers) {
            return answers.passwordType === 'default';
        }
    },
    {
        type: 'confirm',
        name: 'includeNumbers',
        message: 'Include numbers?',
        default: true,
        when: function (answers) {
            return answers.passwordType === 'default';
        }
    },
    {
        type: 'confirm',
        name: 'includeSymbols',
        message: 'Include symbols?',
        default: true,
        when: function (answers) {
            return answers.passwordType === 'default';
        }
    },
    {
        type: 'confirm',
        name: 'includeUppercase',
        message: 'Include uppercase letters?',
        default: true,
        when: function (answers) {
            return answers.passwordType === 'memorable';
        }
    },
    {
        type: 'confirm',
        name: 'includeNumbers',
        message: 'Include numbers?',
        default: true,
        when: function (answers) {
            return answers.passwordType === 'memorable';
        }
    },
    {
        type: 'confirm',
        name: 'includeSymbols',
        message: 'Include symbols?',
        default: true,
        when: function (answers) {
            return answers.passwordType === 'memorable';
        }
    },
    {
        type: 'input',
        name: 'password',
        message: 'Insert password to validate:',
        default: 'Good luck!',
        when: function (answers) {
            return answers.passwordType === 'validate';
        }
    },
    {
        type: 'text',
        name: 'help',
        message: 'Help',
        default: '',
        when: function (answers) {
            return answers.passwordType === 'help';
        }
    }
];

inquirer.prompt(questions).then(answers => {
    if (answers.passwordType === 'default') {
        generatDefaultePassword(answers.length, answers.includeUppercase, answers.includeNumbers, answers.includeSymbols);
    } else if (answers.passwordType === 'memorable') {
        generateMemorablePassword(answers.includeUppercase, answers.includeNumbers, answers.includeSymbols);
    } else if (answers.passwordType === 'validate') {
        validatePassword(answers.password);
    } else {
        console.log('To use it in your project: \n\n' +
            '1. Check what option do you want to use: \ndefault' +
            '\nmemorable' +
            '\nvalidate' +
            '\n\n2. Run the command (depending on the option you choose):' +
            '\n$ node default.js < length > <includeUppercase> <includeNumbers> <includeSymbols>' +
            '\n$ node memorable.js <includeUppercase> <includeNumbers> <includeSymbols>' +
            '\n$ node validate.js <password>' +
            '\n\nNote that default.js and memorable.js return the variable "password", ' +
            'so you can use it in your project but validate.js returns a message if the password is pawned or not.');
    }
});