# Caesar cipher CLI tool

This is a command line application. It encrypts and decrypts text with [Caesar`s cipher](https://en.wikipedia.org/wiki/Caesar_cipher). The application encrypts and decrypts only letters of the Latin alphabet. All other charters, including letters from alphabets of other languages remain unchanged

## How to install

To install this application, you must perform the following steps:

1. Download and install [Node.js](https://nodejs.org/)
2. Download it from this repository `git clone https://github.com/baklai/caesar-cipher-cli-tool`.
3. Run the command line and go to the application folder.
4. Enter the command `npm install` or `npm i` and wait for the dependency installation process to complete.
5. The application is ready to go!

## How to use

After installation completed to start the application, in the folder the application, enter the following into the command line: `node src/caesar-cli [options]`, where options are command line parameters that determine the operation of the application (short alias and full name):

3. **-s, --shift**: a shift
4. **-i, --input**: an input file
5. **-o, --output**: an output file
6. **-a, --action**: an action encode/decode
7. **-h, --help**: a caesar cipher cli tool information
8. **-v, --version**: a current version

**Usage example:**

\$ node src/caesar-cli -a encode -s 7 -i "./input.txt" -o "./output.txt"

\$ node src/caesar-cli --action encode --shift 7 --input plain.txt --output encoded.txt

\$ node src/caesar-cli --action decode --shift 7 --input decoded.txt --output plain.txt

> input.txt `This is secret. Message about "_" symbol!`

> output.txt `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`
