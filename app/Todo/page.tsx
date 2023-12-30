'use client';
import {TaskList} from "../components/TaskList/TaskList";
import {ITaskProps, generateUUID, Task, WorkStatus} from "../components/TaskList/Task";
import {
    TextField,
    Button,
    Container,
  } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import { styled } from "@mui/system";
import { ITasksState, reduxStore } from "@/lib/redux";

const KEY = 'todoApp.todos';

export default () => {

    const inputRef = useRef<HTMLInputElement>(null);

    const [inputVal, setInputVal] = useState("");
    const [isEdited, setIsEdited] = useState(false);
    const [editedId, setEditedId] = useState('0');

    var taskStore = reduxStore.getState().tasks;
    const [tasks, setTasks] = useState([
        new Task({name: "asd", Id: generateUUID(), Status: WorkStatus.Complete, Text: "task1"}),
    ]);
    var tasksProps: ITasksState =  {
        Tasks: taskStore.Tasks
    }

    // useEffect(() => {
    //   localStorage.setItem(KEY, JSON.stringify(tasks));
    // }, [tasks]);

    function changeHandle (event: any):void {
        setInputVal(event.target.value);
    }

    function keyEnterHandle(event: any):void{
        if(event.key == "Enter")
            console.log("asda")
            // handleClick();
    }


    // function handleClick():void { 
    //     var newId = generateUUID();
    //     if (!isEdited) {
    //         setTasks([
    //         ...tasks,
    //         new Task({name: `task ${newId}`, Id : newId, Status: WorkStatus.Todo, Text: inputVal})
    //         ]);
    //     } else {
    //         setTasks([...tasks, new Task({ name: `task ${editedId}`, Id: editedId, Status: WorkStatus.Todo, Text: inputVal })]);
    //     }
    //     setInputVal("");
    //     setIsEdited(false);
    // }

    const StyledAddButton = styled(Button)`
        height: 55
    `;

    return (
        <Container component="main" className="taskContainer">
            <TextField
                sx={{
                    width: "70%",
                }}
                variant="outlined"
                label="type your task"
                type="text"
                onChange={changeHandle}
                value={inputVal}
                inputRef={inputRef}
                onKeyDown={keyEnterHandle}
            />
            <StyledAddButton
                size="large"
                variant={isEdited ? "outlined" : "contained"}
                color="primary"
                disabled={inputVal ? false : true}
            >
                {isEdited ? "Edit Task" : "Add Task"}
            </StyledAddButton>
            <TaskList
                {...tasksProps}
                >

            </TaskList>
        </Container>
    )
};