import { createContext, useState, useReducer } from "react";    

export const TaskContext=createContext({});

export const TaskProvider = (props) => {

    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("-1")

    const [tasks, setTasks] = useState([
        {
            description:"Conquistar o mundo",
            date:"2022-07-22 00:00",
            status:"0"
        },
        {
            description:"Kanban React",
            date:"2022-05-25 17:00",
            status: "1"
        },
        {
            description:"1º Ciclo do Alpha Ed/tech",
            date:"2022-03-29 00:00",
            status: "2"
        }
    ]);

    const [any, forceUpdate] = useReducer(num => num + 1, 0);
    function handleChange(){
        console.log(any)
        forceUpdate();
    }


    function save() {
        const newDate = date.replace("T", " ");
        const task = {
            description: description,
            date: newDate,
            status: status
        }        

        const array = tasks;
        array.push(task);
        setTasks(array);

        clearInputs();
    }

    function clearInputs(){
        setDate("");
        setDescription("");
        setStatus("-1");
    }

    return (
        <TaskContext.Provider
            value={{
                date,
                setDate,
                description,
                setDescription,
                status,
                setStatus,
                tasks,
                setTasks,
                handleChange,
                save,
                clearInputs
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )

};