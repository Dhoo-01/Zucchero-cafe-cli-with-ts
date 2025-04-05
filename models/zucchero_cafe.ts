import { centaureissi } from "./employee.ts"


class ZuccheroCafe {
  greetCustomer(customerName: string): void {
    console.log(`hello ${customerName}, i'am ${centaureissi.name}. im ${centaureissi.job} at here, what do you like in here?`)
  }

}
export { ZuccheroCafe }
