# bf-node

BF-Node is an lightweight interpreter of the Brainfuck programming language, written in JavaScript

The plain version of Brainfuck in the library weighs only 246 bytes

## Usage

JavaScript
```
const Brainfuck = require("bf-node")
Brainfuck.base(/* code */, /* options */) // options are optional
Brainfuck.random(/* code */, /* options */)
```

Command line
```
bf <type> <path to file>
```

## Types

`base` - The plain Brainfuck

`random` - Brainfuck with `?` operator, generates a random number from 0 to current cell value and stores result in current cell

## Options

Options is an array of functions

Default:
```
[
    t => new Uint8Array(t), // the function that makes the memory array, t is the length input
    String.fromCharCode, // the function that turns numbers into characters
    s => s.charCodeAt(), // the function that turns characters into numbers
    t => process.stdout.write(t), // the function that outputs the result
    () => ReadlineSync.question("> ", {
        limit: input => input.length == 1,
        limitMessage: ""
    }) // the function that receives the input
]
```

## Performance

100 million `+` operations took on average 570ms to complete

100 million `-` operations took on average 600ms to complete

## File sizes

`base` - 246 bytes

`random` - 294 bytes