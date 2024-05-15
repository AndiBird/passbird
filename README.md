
# Passbird 🐦‍⬛

Passbird is an npm library for generating and validating passwords.

## Installation

To install Passbird globally on your system, run:

```sh
npm install -g passbird
```

## Usage

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

## Contributing

We welcome contributions to Passbird! If you're interested in improving this library, there are many ways you can contribute:

- Submit bug reports and feature requests on our [GitHub issues page](https://github.com/AndiBird/passbird/issues).
- Review and improve our documentation.
- Review and refactor our existing code.
- Add new features and enhancements.

To get started, please fork the [Passbird repository](https://github.com/AndiBird/passbird.git), make your changes, and submit a pull request. We look forward to collaborating with you!

## License

Passbird is licensed under the MIT License. See the [LICENSE](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt) file for more details.