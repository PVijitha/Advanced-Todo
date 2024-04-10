// import { create } from "zustand";
// // import { produce } from "immer";
// export const useTaskStore = create((set) => {
//   return { 
//     inputs: {title: "", description: ""},
//     isTitleValid: false,
//     isAlreadyExist: false,
//     task: [],
//     selectedTodo: [],
//     search: "",
//     selectedItem: "",
//     selectedProgress: null,
//     handleOptionClick: (option) => {
//       set({selectedProgress: option})
//     }
//   };
// });
import { create } from 'zustand';
import { produce } from 'immer';
import { persist } from "zustand/middleware";
 
export const useTaskStore = create()(
  persist(
    (set) => ({     
      // selectedProgress: null,    
      task: [], 
      // setSelectedProgress: (selectedProgress) =>
      // set(
      //   produce((state) => {
      //     state.selectedProgress = selectedProgress;
      //   })
      // ),
      setTask: (task) =>
      set(
        produce((state) => {
          state.task = { title, description, id };
        })
      ),
      clearStore: () =>
        set(
          produce((state) => {
            state.selectedProgress = null;
          })
        ),
    }),
    { name: "task-store" }
  )
);