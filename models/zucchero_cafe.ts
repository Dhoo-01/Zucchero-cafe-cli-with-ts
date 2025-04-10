import { Customer } from "./customer_class.ts"
import { centaureissi } from "./employee.ts"

class ZuccheroCafe {
  greetCustomer(customerName: string): void {
    console.log(`Hello ${customerName}, I'm ${centaureissi.name} and I work as a ${centaureissi.job} here. What would you like today?`)
  }
  generateReceipt(user: Customer, totalPrice: number, amount: number) {
    const hasDiscount = totalPrice > 50
    const finalPrice = hasDiscount ? totalPrice - totalPrice * 0.08 : totalPrice
    const change = amount - finalPrice
    if (totalPrice > 50) {
      console.log("you get discount 8% because your total price was higher than 50")
    }

    const receipt = `
    ===== Zucchero Cafe Receipt =====
    Customer: ${user.name}
    Date: ${new Date().toLocaleString()}
    ---------------------------------
    Orders: ${user.orders.map((item, i) => `|${i + 1}. ${item.name.padEnd(10)} price: ${item.price}`
    ).join("\n")}
    
    Total: ${Math.round(finalPrice)}
    Payment: ${user.pay(amount)}
    Change: ${Math.round(change)}
    ---------------------------------
    Thank You for visiting!
    `
    console.log(receipt)
  } 
}
export { ZuccheroCafe } 
