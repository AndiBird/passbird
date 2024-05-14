```markdown
# Passbird

Passbird is an npm library for generating keys.

## Installation

To install Passbird globally on your system, run:

```sh
npm install -g passbird
```

## Usage

Passbird can be used from the command line with the following syntax:

```sh
passbird <length> <includeUppercase> <includeNumbers> <includeSymbols>
```

Where:

- `<length>` is the length of the key to be generated.
- `<includeUppercase>` is a boolean (`true` or `false`) indicating whether to include uppercase letters in the key.
- `<includeNumbers>` is a boolean (`true` or `false`) indicating whether to include numbers in the key.
- `<includeSymbols>` is a boolean (`true` or `false`) indicating whether to include symbols in the key.

For example, to generate a 10-character key with uppercase letters, numbers, and symbols, you would run:

```sh
passbird 10 true true true
```

## License

Passbird is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
```

This guide provides information on how to install and use Passbird, as well as a link to the license.