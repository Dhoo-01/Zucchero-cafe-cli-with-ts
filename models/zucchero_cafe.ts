import { centaureissi } from "./employee.ts"


class ZuccheroCafe {
  greetCustomer(customerName: string): void {
    console.log(`Hello ${customerName}, I'm ${centaureissi.name} and I work as a ${centaureissi.job} here. What would you like today?`)
  }

}
export { ZuccheroCafe }
