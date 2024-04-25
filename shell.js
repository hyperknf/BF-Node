const fs = require("fs")

const types = [
    "base",
    "random"
]

module.exports = () => {
    const type = process.argv[2]
    const path = process.argv[3]
    if (!types.includes(type)) throw new Error("Invalid type")
    if (!path) throw new Error("Path to file not found")
    require("./index.js")[type](fs.readFileSync(path, "utf-8"))
}