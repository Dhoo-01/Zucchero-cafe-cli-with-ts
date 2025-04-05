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

const drinksMenu: Coffees[] = [
  springfield, makkiato, cappucino, hot_chocholate
]

export { drinksMenu, Coffees } 
