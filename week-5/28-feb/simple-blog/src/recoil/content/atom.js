import { atom } from "recoil";

export const contentState = atom({
  key: "content",
  default: {
    posts: []
  }
})