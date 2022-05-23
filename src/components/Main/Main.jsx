import React, {useState, useReducer} from 'react';
import Form from '../Form/Form';
import Section from '../Section/Section'
import { StyledMain } from './style';

const Main = () => {
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("-1")

    const [todo, setTodo] = useState([{
        description:"Conquistar o mundo",
        date:"2022-07-30"
    }]);

    const [doing, setDoing] = useState([{
        description:"Kanban React",
        date:"2022-05-23"
    }]);
    
    const [done, setDone] = useState([{
        description:"1º Ciclo do Alpha Ed/tech",
        date:"2022-04-20"
    }]);

    const [any, forceUpdate] = useReducer(num => num + 1, 0);
    function handleChange(){
        console.log(any)
        forceUpdate();
    }


    function save() {
        const thing = {
            description: description,
            date: date,            
        }

        let array;
        switch(status) {
            case '0':
                array = todo;
                array.push(thing);
                setTodo(array);                
                break;
            case '1':
                array = doing;
                array.push(thing);
                setDoing(array);
                break;
            case '2':
                array = done;
                array.push(thing);
                setDone(array);
                break;
            default:
                return false
        }

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
                <h1>Kanban</h1>
                <Form
                    date={date} setDate={setDate}
                    description={description} setDescription={setDescription}
                    status={status} setStatus={setStatus}
                    save={save}
                />
                <Section
                    todo={todo} setTodo={setTodo}
                    doing={doing} setDoing={setDoing}
                    done={done} setDone={setDone}
                    handle={handleChange}
                    setDate={setDate} setDescription={setDescription} setStatus={setStatus}
                />
            </StyledMain>            
        </>
    );
}

export default Main;