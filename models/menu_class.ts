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
  isSoup: boolean

  constructor(id: number, name: string, price: number, isSoup: boolean) {
    super(id, name, price)
    this.isSoup = isSoup
  }
}

const Pizza = new Foods(1, "Pizza", 10, false)
const BeefStroganoff = new Foods(1, "Beef Stroganoff", 75000, true) // Rusia
const CoqAuVin = new Foods(2, "Coq au Vin", 85000, true) // Prancis
const Goulash = new Foods(3, "Goulash", 65000, true) // Hungaria
const Paella = new Foods(4, "Paella", 70000, false) // Spanyol
const Moussaka = new Foods(5, "Moussaka", 68000, false) // Yunani

const foodsMenu: Foods[] = [
  Pizza, BeefStroganoff, CoqAuVin, Goulash, Paella, Moussaka
]

export { Menu, Pizza, BeefStroganoff, CoqAuVin, Goulash, Paella, Moussaka, foodsMenu, Foods }
