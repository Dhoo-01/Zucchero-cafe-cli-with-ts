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

  const tiramisu = new Desserts( 1, "Tiramisu", 8.5 )
  const cheesecake = new Desserts( 2, "Cheesecake",7.0 )
 const chocolateLavaCake = new Desserts( 3, "Chocolate Lava Cake", 9.0 )
 const pannaCotta = new Desserts(4, "Panna Cotta", 6.5 )
  const CremeBrulee = new Desserts( 5, "Crème Brûlée", 8.0 )


const dessertMenu: Desserts[] = [
  tiramisu, cheesecake, chocholateLavaCake, pannaCotta, CremeBrulee
];

export { dessertMenu, Desserts }
