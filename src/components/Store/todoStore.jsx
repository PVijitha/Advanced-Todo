import { create } from "zustand";
import { produce } from "immer";

export const useTodoStore = create((set) => ({
  selectedProgress: null,
  inputs: { title: "", description: "" },
  selectedTodo: [],
  isTitleValid: true,
  setSelectedProgress: (selectedProgress) =>
    set(
      produce((state) => {
        state.selectedProgress = selectedProgress;
      })
    ),
  setTitle: (title) => 
  set(
     produce((state) => {
        state.inputs.title = title;
     })
  ),
  setSelectedTodo: (selectedTodo) =>
    set(
      produce((state) => {
        state.selectedTodo = selectedTodo;
      })
    ),
  setIsTitleValid: (isTitleValid) => 
    set(
        produce((state) => {
            state.isTitleValid = isTitleValid;
        })
    ),
  clearStore: () =>
    set(
      produce((state) => {
        state.selectedProgress = null;
      })
    ),
}));
