# Passbird 🐦‍⬛

**Passbird is a Node.js library for generating strong, customizable passwords and validating their security against known data breaches. It can be used as a command-line tool or integrated into your JavaScript projects.**

[![NPM Version](https://img.shields.io/npm/v/passbird.svg)](https://www.npmjs.com/package/passbird)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Installation

To install Passbird globally on your system, run:

```sh
npm install -g passbird
```

To install Passbird in an specific context, run:

```sh
npm install passbird
```

# Usage (when installed globally)

To use Passbird, start by running:

```sh
passbird start
```

You will be asked to choose the type of password you want to generate:

```sh
$ passbird start
? Want to generate a default or memorable password or want to validate a password? (Use arrow keys)
❯ Default
  Memorable
  Validate
```

## Default Password

If you choose the "Default" option, you will be asked the following questions:

```sh
? What type of password do you want to generate? Default
? How long do you want the password to be? 10
? Include uppercase letters? Yes
? Include numbers? Yes
? Include symbols? Yes
```
After answering these questions, Passbird will generate a random password for you, like this: :v/rz!p6SR

## Memorable Password

If you choose the "Memorable" option, you will be asked the following questions:

```sh
? What type of password do you want to generate? Memorable
? Include uppercase letters? Yes
? Include numbers? Yes
? Include symbols? Yes
Please, enter the words separated by commas: Andrés, Lina
```
After answering these questions, Passbird will generate a memorable password for you, like this: AndrésdLina16M.. If you're not satisfied with the password, you can choose to generate a new one:

```sh
Are you satisfied with the password? (y/n) n
Please, enter the words separated by commas:
```

## Validate

This section of the code introduces a feature that validates any given password against the Have I Been Pwned (HIBP) API.

```sh
$ passbird start
? Want to generate a default or memorable password or want to validate a password? Validate
? Insert password to validate: Loi

Warn:
Password has been exposed in previous data breaches.
```

# Usage (when installed in an specific context)

If you want to use an specific function (default, memorable or validate password), run:

## For default:

```sh
node default.js <length> <includeUppercase> <includeNumbers> <includeSymbols>
```

The command will be something like:

```sh
node default.js 10 true true true
```

If you want to import it and use it in your project:

```sh
import { generateDefaultPassword } from 'passbird';

// Define arguments
let length = 10;
let includeUppercase = 'true';
let includeNumbers = 'true';
let includeSymbols = 'true';

// Call the function
let password = generateDefaultPassword(length, includeUppercase, includeNumbers, includeSymbols);
```

## For memorable:

```sh
node memorable.js <includeUppercase> <includeNumbers> <includeSymbols>
```

The command will be something like:

```sh
node memorable.js true true true
```
Then, you will be ask for write the words you want to use.

If you want to import it and use it in your project:

```sh
import { generateMemorablePassword } from 'passbird';

// Define arguments
let includeUppercase = 'true';
let includeNumbers = 'true';
let includeSymbols = 'true';

// Call the function
generateMemorablePassword(includeUppercase, includeNumbers, includeSymbols);
```

## For validate:

```sh
node validate.js <password>
```

The command will be something like:

```sh
node validate.js password123
```

If you want to import it and use it in your project:

```sh
import { validatePassword } from 'passbird';

// Define the password
let password = 'password123';

// Call the function
validatePassword(password);
```

Note that default.js and memorable.js return the variable "password", so you can use it in your project but validate.js returns a message if the password is breached or not.

### Notes on Library Usage:

*   **Memorable Password Input:** Currently, when `generateMemorablePassword` is imported, it interactively prompts for words. For non-interactive use, future versions may support passing words directly as a function argument.
*   **Validate Password Return Value:** The `validatePassword` function currently returns a descriptive message. For more straightforward programmatic use (e.g., in conditional logic), future versions may return a boolean value or a more structured object indicating the validation status.

# Contributing

We welcome contributions to Passbird! If you're interested in improving this library, there are many ways you can contribute:

- Submit bug reports and feature requests on our [GitHub issues page](https://github.com/AndiBird/passbird/issues).
- Review and improve our documentation.
- Review and refactor our existing code.
- Add new features and enhancements.

To get started, please fork the [Passbird repository](https://github.com/AndiBird/passbird.git), make your changes, and submit a pull request. We look forward to collaborating with you!

## License

Passbird is licensed under the MIT License. See the [LICENSE](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt) file for more details.