import * as readline from "readline"

class Coffees {
  readonly id: number
  name: string
  price: number
  discount: number


  constructor(id: number, name: string, price: number, discount: number) {
    this.id = id
    this.name = name
    this.price = price
    this.discount = discount
  }


  coffeeInfo(name: string) {
    console.info(`hello ${name},  this are ${this.name} coffee, it's price are ${this.price}$`)
  }
}

const springfield = new Coffees(1, "Spring Field", 5, 1)
const makkiato = new Coffees(2, "macchiato", 7, 0.2)
const cappucino = new Coffees(3, "Cappucino", 6, 0.5)
const hot_chocholate = new Coffees(4, "hot chocholate", 3, 0.3)

const coffeeNames: string[] = [springfield.name, makkiato.name, cappucino.name, hot_chocholate.name]


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What coffee do you like to drink? ", (answer: string) => {

  console.log(`are you sure you want ${answer}?`)
  rl.question("yes or no? ", (ans: string) => {
    if (ans === "yes") {
      if (coffeeNames.includes(answer)) {
        console.log("pesanan sedang diproses")
      } else {
        console.log("tidak ada item tersebut")
      }
    }

    rl.close()
  })

});





/*class Category {
  _name?: string
 
  get name():string {
    if (this._name) {
      return this._name
    } else {
        return "empty"
      }
  } 

  set name(value: string) {
    if (value !== "") {
      this._name = value
    }
  }
}

const category = new Category()
console.info(category.name)

category.name = "wawa"
console.info(category.name)
*/
