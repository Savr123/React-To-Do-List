import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITaskProps, Task } from "@/app/components/TaskList/Task";

export const addTask = createAsyncThunk(
    "tasks/storeNewTask",
    async(task: Task) => {
        return {
            task
        };
    }
)