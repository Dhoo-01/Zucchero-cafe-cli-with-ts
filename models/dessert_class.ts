import { Menu } from "./menu_class.ts"

class Desserts extends Menu {
  constructor(
    id: number,
    name: string,
    price: number
  ) {
    super(id, name, price)
  }
}

  const tiramisu = new Desserts( 1, "Tiramisu", 9)
  const cheesecake = new Desserts( 2, "Cheesecake",7 )
 const chocolateLavaCake = new Desserts( 3, "Chocolate Lava Cake", 9 )
 const pannaCotta = new Desserts(4, "Panna Cotta", 7 )
  const CremeBrulee = new Desserts( 5, "Crème Brûlée", 8 )


const dessertMenu: Desserts[] = [
  tiramisu, cheesecake, chocolateLavaCake, pannaCotta, CremeBrulee
];

export { dessertMenu, Desserts }
