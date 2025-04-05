import * as readline from "readline"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("anta dare? ", (jawab: string) => {
  console.log(jawab)
})
