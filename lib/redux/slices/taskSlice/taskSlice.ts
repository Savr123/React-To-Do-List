import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Task, generateUUID, WorkStatus, ITaskProps } from "@/app/components/TaskList/Task";
import { reducer } from "../../rootReducer";
import { produce, Draft } from "immer";
import { addTask } from "./thunks";

const initialState = [
        new Task({name: "asd", Id: generateUUID(), Status: WorkStatus.Complete, Text: "task1"}),
        new Task({name: "asd", Id: generateUUID(), Status: WorkStatus.Complete, Text: "task2"}),
    ]

// Define the types of actions that can be dispatched
type TodoAction = 
  | { type: 'ADD_TODO'; payload: { id: string; text: string; } }
  | { type: 'TOGGLE_TODO'; payload: { id: string; Status: WorkStatus} }
  | { type: 'REMOVE_TODO'; payload: { id: string; } };

// Define the reducer function
export function todoReducer(state: Task[] = initialState, action: TodoAction): Task[] {
    switch (action.type) {
      case 'ADD_TODO':
        const newId: string = generateUUID();
        const newTask: Task = new Task({
            Id: newId,
            name: `new Task: ${newId}`,
            Status: WorkStatus.Todo,
            Text: action.payload.text,
        }); 
        return [...state, newTask];
    //   case 'TOGGLE_TODO':
    //     return state.map(todo =>
    //       todo.Id === action.payload.id ? { ...todo, completed: WorkStatus} : todo
    //     );
      case 'REMOVE_TODO':
        return state.filter(todo => todo.Id !== action.payload.id);
      default:
        return state;
    }
}

export const taskSlice = createSlice({
    name: 'taskList',
    initialState,
    reducers: 
    {
        todoReducer(state, action: TodoAction)
    }
})

// export const taskSlice = createSlice(
//     {
//         name: 'taskList',
//         initialState,
//         reducers: {
//             removeTask(state) {
//                 var removedTask = state.Tasks.pop();
//             },
//             addTask(state, action: PayloadAction<string>) {
//                 const newId: string = generateUUID();
//                 const newTask: Task = new Task({
//                     Id: newId,
//                     name: `new Task: ${newId}`,
//                     Status: WorkStatus.Todo,
//                     Text: action.payload,
//                 }); 
//                 state = {...state, Tasks: [...state.Tasks, newTask]};
//             },
//             editTask(state){
//                 console.log("edit task");
//             }
//         }
//     });