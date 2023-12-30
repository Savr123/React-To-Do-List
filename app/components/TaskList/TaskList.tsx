'use client'

import { Task, ITaskProps, WorkStatus } from "./Task";
import { List } from "@mui/material"
import { taskSlice, ITasksState } from "@/lib/redux";
import { useDispatch } from "react-redux";

export const TaskList = (taskState: ITasksState) => {

    function onDeleteHandle(){
        // dispatch(taskSlice.actions.removeTask);
    }

    const tasks = taskState.Tasks.map(
        (task) => <Task
            key = {task.Id}
            Text = {task.Text}
            name = {task.Name}
            Id = {task.Id}
            Status={task.Status}
        />
    );

    return (
        <List>
            {tasks}
        </List>
    );
}