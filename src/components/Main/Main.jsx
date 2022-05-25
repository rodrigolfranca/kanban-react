import React, {useState, useReducer} from 'react';
import Form from '../Form/Form';
import Section from '../Section/Section'
import { StyledMain } from './style';

const Main = () => {
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("-1")

    const [tasks, setTasks] = useState([
        {
            description:"Conquistar o mundo",
            date:"2022-07-30",
            status:"0"
        },
        {
            description:"Kanban React",
            date:"2022-05-23",
            status: "1"
        },
        {
            description:"1º Ciclo do Alpha Ed/tech",
            date:"2022-04-20",
            status: "2"
        }
    ]);

    const [any, forceUpdate] = useReducer(num => num + 1, 0);
    function handleChange(){
        console.log(any)
        forceUpdate();
    }


    function save() {
        const thing = {
            description: description,
            date: date,
            status: status
        }

        const array = tasks;
        array.push(thing);
        setTasks(array);

        clearInputs();
    }

    function clearInputs(){
        setDate("");
        setDescription("");
        setStatus("-1");
    }


    return (
        <>
            <StyledMain>
                <h1>Gerenciador de Tarefas - Kanban</h1>
                <h4>Cadastrar uma Tarefa</h4>
                <Form
                    date={date} setDate={setDate}
                    description={description} setDescription={setDescription}
                    status={status} setStatus={setStatus}
                    save={save}
                />
                <h4>Quadro de Tarefas</h4>
                <Section
                    tasks={tasks} setTasks={setTasks}
                    handle={handleChange}
                    setDate={setDate} setDescription={setDescription} setStatus={setStatus}
                />
            </StyledMain>            
        </>
    );
}

export default Main;