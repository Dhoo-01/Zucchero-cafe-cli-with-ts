class Menu {
  id: number
  name: string
  price: number

  constructor(id: number, name: string, price: number) {
    this.id = id
    this.name = name
    this.price = price
  }
}

class Foods extends Menu {
  constructor(id: number, name: string, price: number) {
    super(id, name, price)
  }
}

const Pizza = new Foods(1, "Pizza", 10)
const BeefStroganoff = new Foods(1, "Beef Stroganoff", 8) // Rusia
const CoqAuVin = new Foods(2, "Coq au Vin", 9) // Prancis
const Goulash = new Foods(3, "Goulash", 7) // Hungaria
const Paella = new Foods(4, "Paella", 8) // Spanyol
const Moussaka = new Foods(5, "Moussaka", 7) // Yunani

const foodsMenu: Foods[] = [
  Pizza, BeefStroganoff, CoqAuVin, Goulash, Paella, Moussaka
]

export { Menu, Pizza, BeefStroganoff, CoqAuVin, Goulash, Paella, Moussaka, foodsMenu, Foods }
