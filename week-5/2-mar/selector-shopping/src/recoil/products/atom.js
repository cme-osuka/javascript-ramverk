import { atom } from "recoil";

export const products = [
  {
    id: 1,
    title: "Nuggets",
    price: 100
  }, 
  {
    id: 2, 
    title: "Saltade Edamame-skidor",
    price: 600
  },
  {
    id: 3,
    title: "Onsen tamago",
    price: 20
  },
  {
    id: 4,
    title: "En riktigt kall Sapporo",
    price: 300
  },
  {
    id: 5,
    title: "Sourcream & onion chips",
    price: 200
  }
];

export const productsState = atom({
  key: "productsState",
  default: products
})