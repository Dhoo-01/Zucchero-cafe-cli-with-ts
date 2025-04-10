class Coffees {
  readonly id: number
  name: string
  price: number


  constructor(id: number, name: string, price: number) {
    this.id = id
    this.name = name
    this.price = price
  }


  coffeeInfo(name: string) {
    console.info(`hello ${name},  this are ${this.name} coffee, it's price are ${this.price}$`)
  }
}

const springfield = new Coffees(1, "Spring Field", 5)
const makkiato = new Coffees(2, "macchiato", 7)
const cappucino = new Coffees(3, "Cappucino", 6)
const hot_chocolate = new Coffees(4, "hot chocolate", 3)

const drinksMenu: Coffees[] = [
  springfield, makkiato, cappucino, hot_chocolate
]

export { drinksMenu, Coffees } 
