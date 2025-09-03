import espresso from "../assets/espresso.png";
import american from "../assets/american.png";
import arabic from "../assets/arabic.png";
import capuccino from "../assets/capuccinno.png";
import creamyespresso from "../assets/creamyespresso.png";
import cuban from "../assets/cuban.png";
import hawaii from "../assets/hawaii.png";
import irish from "../assets/irish.png";
import latte from "../assets/latte.png";
import macchiato from "../assets/macchiato.png";
import milkcoffee from "../assets/milkcoffee.png";
import mocaccino from "../assets/mocaccino.png";
import hotchocolat from "../assets/hotchocolat.png";
import icedcoffee from "../assets/icedcoffee.png";

export const coffeList = {
  coffeeList: [
    {
      img: espresso,
      name: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
      tag: ["Tradicional"],
    },
    {
      img: american,
      name: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      price: 9.9,
      tag: ["Tradicional"],
    },
    {
      img: creamyespresso,
      name: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
      price: 9.9,
      tag: ["Tradicional"],
    },
    {
      img: icedcoffee,
      name: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
      price: 9.9,
      tag: ["Tradicional", "Gelado"],
    },
    {
      img: milkcoffee,
      name: "Café com leite",
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      price: 9.9,
      tag: ["Tradicional", "Com Leite"],
    },
    {
      img: latte,
      name: "Latte",
      description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: 9.9,
      tag: ["Tradicional", "Com Leite"],
    },
    {
      img: capuccino,
      name: "Capuccino",
      description: "Bebida com canela feita de doses iguais de café, leite e espuma",
      price: 9.9,
      tag: ["Tradicional", "Com Leite"],
    },
    {
      img: macchiato,
      name: "Macchiato",
      description: "Café expresso misturado com um pouco de leite quente e espuma",
      price: 9.9,
      tag: ["Tradicional", "Com Leite"],
    },
    {
      img: mocaccino,
      name: "Mocaccino",
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
      price: 9.9,
      tag: ["Tradicional", "Com Leite"],
    },
    {
      img: hotchocolat,
      name: "Chocolate Quente",
      description: "Bebida feita com chocolate dissolvido no leite quente e café",
      price: 9.9,
      tag: ["Especial", "Com Leite"],
    },
    {
      img: cuban,
      name: "Cubano",
      description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
      price: 9.9,
      tag: ["Especial", "Alcoólico", "Com Leite"],
    },
    {
      img: hawaii,
      name: "Havaiano",
      description: "Bebida adocicada preparada com café e leite de coco",
      price: 9.9,
      tag: ["Especial"],
    },
    {
      img: arabic,
      name: "Árabe",
      description: "Bebida preparada com grãos de café árabe e especiarias",
      price: 9.9,
      tag: ["Especial"],
    },
    {
      img: irish,
      name: "Irlandês",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      price: 9.9,
      tag: ["Especial", "Alcoólico"],
    },
  ],
};
