'use client';
import React from "react";
import {
    TextField,
    Button,
    Typography,
    Checkbox,
    List,
    ListItem,
    Container,
  } from "@mui/material";
import { styled } from "@mui/system";
import {v4 as uuidv4} from 'uuid';
import { useDispatch } from "react-redux";
import { taskSlice } from "@/lib/redux";

export interface ITaskProps {
    name: string;
    Id: string;
    Status: WorkStatus
    Text: string;
}

export enum WorkStatus{
    Todo = 1,
    Wip = 2,
    Complete = 3,
} 



export class Task extends React.Component<ITaskProps>{
    public Name: string;
    public Id: string;
    public Status: WorkStatus;
    public Text: string;
    public dispatch: any;

    public Task()
    {
        this.dispatch = useDispatch();
    }

    public get isDone():boolean{
         switch(this.Status){
            case WorkStatus.Complete:
                return true;
            }
        return false;
    }
    public set isDone(isDone:boolean){
        if (isDone)
            this.Status = WorkStatus.Complete;
        this.Status = WorkStatus.Todo;
    }

    constructor(props:ITaskProps)
    {
        super(props);
        this.Name = props.name;
        this.Id = props.Id;
        this.Status = props.Status;
        this.Text = props.Text;
    }


    render(){
        
        const handleDone = (Id: string) => {

        }

        const onDelete = (Id:string) => {

        }

        const handleEdit = (Id:string) => {

        }

        return(
            <ListItem key = {this.Id} className="task">
                <Checkbox
                    onClick={() => handleDone(this.Id)}
                    checked={this.isDone}
                    />
                <Typography
                    className="task-Text"
                    style={{ color: this.isDone ? "green" : "" }}
                    key={this.Id}
                    >
                    {this.Text}
                </Typography>
                <Button
                    className="task-Button"
                    onClick={() => handleEdit(this.Id)}
                    variant="contained"
                >
                    Edit
                </Button>
                <Button
                    className="task-Button"
                    onClick={() => this.dispatch(taskSlice.actions.removeTask())}
                    color="secondary"
                    variant="contained"
                    >
                    delete
                </Button>            
            </ListItem>
        );
    }
}

export function generateUUID():string {
    return uuidv4();
}

// export const Task = (props: ITaskProps) => {

//     return (
//         <div>
//             <div className="id">**</div>
//             <div className="taskName">someName</div>
//             <div className="Status">ToDo/In Progress/Complete</div>
//             <div className="Edit">Edit</div>
//             <div className="Remove">Remove</div>
//         </div>
//     );
// }