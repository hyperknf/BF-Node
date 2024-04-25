const rls = require("readline-sync")
const bf = require("./min.js").b
const bfr = require("./random.min.js").b
const time = Date.now()
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
bf(`
${"-".repeat(1e8)}.
`, ...o)
console.log(`\nTime: ${Date.now() - time}ms`)