class Customer {
  name: string
  currency?: number = 5000
  orders: { name: string; price: number }[]

  constructor(name: string, /*currency: number*/) {
    this.name = name
    /*    this.currency = currency*/
    this.orders = []
  }

  addOrders(order: { name: string; price: number }) {
    this.orders.push(order)
  }

  countTotalOrder() {
    console.log(this.orders)
  }
}

export { Customer }
