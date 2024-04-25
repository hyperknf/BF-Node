const rls = require("readline-sync")

const o = [
    t => new Uint8Array(t),
    String.fromCharCode,
    s => s.charCodeAt(),
    t => process.stdout.write(t),
    () => rls.question("> ", {
        limit: input => input.length == 1,
        limitMessage: ""
    })
]

exports.options = o

exports.base = (code, options = o) => require("./min.js").b(code, ...options)
exports.random = (code, options = o) => require("./random.min.js").b(code, ...options)

exports.shell = require("./shell.js")