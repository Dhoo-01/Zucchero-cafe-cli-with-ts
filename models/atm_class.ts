import { Customer } from "./customer_class.ts"

class Atm {
  balance: number = 100
  limit: number = 10

  withdraw(amount: number, user: Customer): boolean {
    if (amount > this.limit) {
      console.log("you can't pass the limit! \nwithdraw failed")
      return false
    } else if (amount > this.limit && amount % 10 !== 0) {
      console.log("draw must be kelipatan sepuluh")
      return false
    } else {
      this.balance -= amount
      console.log(`your balance after withdraw: ${this.balance}`)
      console.log(`your currency was ${user.wallet}`)
      user.wallet += amount
      console.log(`your currency now are ${user.wallet}`)
      return true
    }
  }
}

export { Atm }
