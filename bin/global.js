#!/usr/bin/env node
import { generatDefaultePassword, generateMemorablePassword, validatePassword } from '../src/index.js';
import inquirer from 'inquirer';


let questions = [
    {
        type: 'list',
        name: 'passwordType',
        message: 'What type of password do you want to generate?',
        choices: ['Default', 'Memorable', 'Validate'],
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
    }
];

inquirer.prompt(questions).then(answers => {
    if (answers.passwordType === 'default') {
        generatDefaultePassword(answers.length, answers.includeUppercase, answers.includeNumbers, answers.includeSymbols);
    } else if (answers.passwordType === 'memorable') {
        generateMemorablePassword(answers.includeUppercase, answers.includeNumbers, answers.includeSymbols);
    } else {
        validatePassword(answers.password);
    }
});