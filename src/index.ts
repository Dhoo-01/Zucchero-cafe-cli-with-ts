import * as readline from "readline"
import { Customer } from "../models/customer_class.ts"
import { ZuccheroCafe } from "../models/zucchero_cafe.ts";
import { foodsMenu } from "../models/menu_class.ts";
import { drinksMenu } from "../models/coffee_class.ts";
import { dessertMenu } from "../models/dessert_class.ts";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const cafe = new ZuccheroCafe()

const menuVariants: string[] = [
  "foods",
  "drinks",
  "dessert"
]

rl.question("what's your name? \n", (customer: string) => {
  const name: string = customer
  const user = new Customer(name)
  console.log(user)
  cafe.greetCustomer(user.name)

  function chooseMenu() {
    menuVariants.forEach((variants, index) => {
      console.log(`${index + 1}. ${variants}`)
    })
    rl.question("what do you want to order? \n", (opt: string) => {
      let menuList: any = [] /*Foods[] | Coffees[] | Desserts[] */

      if (opt === "1") {
        console.log("foods:")
        menuList = foodsMenu
      } else if (opt === "2") {
        console.log("drinks:")
        menuList = drinksMenu
      } else if (opt === "3") {
        menuList = dessertMenu
      } else {
        console.log("pilih yg bener aja yah kamu")
        chooseMenu()
      }

      menuList.forEach((menu: any, index: number) => {
        console.log(`${index + 1}. ${menu.name} price: ${menu.price}`)
      })

      rl.question("choose menu number! [1-6]: ", (orderNumber: string) => {
        const selectedIndex = parseInt(orderNumber) - 1
        const selectedItem = menuList[selectedIndex]

        if (selectedItem) {
          /*  const item = {
              id: selectedItem.id,
              name: selectedItem.name,
              price: selectedItem.price
            } */

          user.addOrders(selectedItem)
          console.log(`you order ${selectedItem.name}, with price: ${selectedItem.price}`)
          console.log(user.orders)

          rl.question("do you want to order again? (y/n)", (answer: string) => {
            if (answer === "y") {
              chooseMenu()
            } else {
              console.log("wakarimashita")
              const totalPrice: any = user.orders.reduce((sum, order) => {
                console.log(`${order.name}: ${order.price}`)
                return sum + order.price
              }, 0)
              console.log(`with total price: ${totalPrice}`)
            }
          })
        } else {
          console.log("wakatta")
        }
      })
    })
  }

  chooseMenu()
})
