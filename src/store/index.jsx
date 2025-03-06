import { atom } from "jotai";

export const showDialogAtom = atom(false);
export const dialogWithAtom = atom("");

export const progressAtom = atom({
  mentari: false,
  test: false,
});
