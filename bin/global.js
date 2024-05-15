#!/usr/bin/env node
import { generatePassword, generateMemorablePassword } from '../src/index.js';
import inquirer from 'inquirer';


let questions = [
    {
        type: 'list',
        name: 'passwordType',
        message: 'What type of password do you want to generate?',
        choices: ['Default', 'Memorable'],
        filter: function(val) {
            return val.toLowerCase();
        }
    },
    {
        type: 'input',
        name: 'length',
        message: 'How long do you want the password to be?',
        when: function(answers) {
            return answers.passwordType === 'default';
        }
    },
    {
        type: 'confirm',
        name: 'includeUppercase',
        message: 'Include uppercase letters?',
        default: true,
        when: function(answers) {
            return answers.passwordType === 'default';
        }
    },
    {
        type: 'confirm',
        name: 'includeNumbers',
        message: 'Include numbers?',
        default: true,
        when: function(answers) {
            return answers.passwordType === 'default';
        }
    },
    {
        type: 'confirm',
        name: 'includeSymbols',
        message: 'Include symbols?',
        default: true,
        when: function(answers) {
            return answers.passwordType === 'default';
        }
    },
    {
        type: 'confirm',
        name: 'includeUppercase',
        message: 'Include uppercase letters?',
        default: true,
        when: function(answers) {
            return answers.passwordType === 'memorable';
        }
    },
    {
        type: 'confirm',
        name: 'includeNumbers',
        message: 'Include numbers?',
        default: true,
        when: function(answers) {
            return answers.passwordType === 'memorable';
        }
    },
    {
        type: 'confirm',
        name: 'includeSymbols',
        message: 'Include symbols?',
        default: true,
        when: function(answers) {
            return answers.passwordType === 'memorable';
        }
    },
    {
        type: 'input',
        name: 'numWords',
        message: 'How many words do you want in your password?',
        when: function(answers) {
            return answers.passwordType === 'memorable';
        }
    }
];

inquirer.prompt(questions).then(answers => {
    if (answers.passwordType === 'default') {
        console.log(generatePassword(answers.length, answers.includeUppercase, answers.includeNumbers, answers.includeSymbols));
    } else {
        console.log(generateMemorablePassword(answers.numWords, answers.includeUppercase, answers.includeNumbers, answers.includeSymbols));
    }
});