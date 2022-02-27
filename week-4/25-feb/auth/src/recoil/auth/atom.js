import { atom } from "recoil";

export const authState = atom({
  key: "auth",
  default: ""
});

export const userState = atom({
  key: "user",
  default: null
})