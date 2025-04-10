import { Customer } from "./customer_class.ts"
import { centaureissi } from "./employee.ts"

class ZuccheroCafe {
  greetCustomer(customerName: string): void {
    console.log(`Hello ${customerName}, I'm ${centaureissi.name} and I work as a ${centaureissi.job} here. What would you like today?`)
  }
  generateReceipt(user: Customer, totalPrice: number, amount: number) {
    const receipt = `
    ===== Zucchero Cafe Receipt =====
    Customer: ${user.name}
    Date: ${new Date().toLocaleString()}
    ---------------------------------
    Orders: ${user.orders.map((item, i) => `|${i + 1}. ${item.name.padEnd(10)} price: ${item.price}`
    ).join("\n")}

    Total: ${totalPrice}
    Payment: ${user.pay(amount)}
    Change: ${amount - totalPrice}
    ---------------------------------
    Thank You for visiting!
    `
    console.log(receipt)
  }
}
export { ZuccheroCafe }
