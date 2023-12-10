import { createSlice } from "@reduxjs/toolkit";
import { Task, generateUUID, WorkStatus } from "@/app/components/TaskList/Task";

const initialState: ITasksState = {
    value: [
        new Task({name: "asd", Id: generateUUID(), Status: WorkStatus.Complete, Text: "task1"}),
        new Task({name: "asd", Id: generateUUID(), Status: WorkStatus.Complete, Text: "task2"}),
    ]
}

export const taskSlice = createSlice(
    {
        name: 'taskList',
        initialState,
        reducers: {
            removeTask(state) {
                console.log("remove task");
            },
            addTask(state){
                console.log("add task");
            },
            editTask(state){
                console.log("edit task");
            }
        }
    });

export interface ITasksState {
    value: Task[]
}