class Customer {
  name: string
  wallet: number = 100
  orders: { name: string; price: number }[]

  constructor(name: string) {
    this.name = name
    this.orders = []
  }

  addOrders(order: { name: string; price: number }) {
    this.orders.push(order)
  }

  pay(amount: number): number {
    console.log(`you pay for ${amount}, and your money left ${this.wallet -= amount} in your wallet`)
    return amount
  }
}

export { Customer }
