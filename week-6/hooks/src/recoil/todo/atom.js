import { atom } from "recoil";

export const todoState = atom({
  key: "todoState",
  default: [
    { id: 123, title: "En Todo", completed: false }
  ],
})