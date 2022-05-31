import React, {useContext} from 'react';
import { TaskContext } from '../../contexts/TaskContext'
import Card from "../Card/Card"
import { StyledCardBox } from './style';

const CardBox = (props) => {

    const { tasks, setTasks, handle, setDate, setDescription, setStatus } = useContext(TaskContext);    

    return (        
        <StyledCardBox className={props.className}>
                <h3>{props.text}</h3>
                {                    
                    tasks.map((task, index) => {                        
                        if (task.status === props.status) return <Card
                        description={task.description} date={task.date} status={task.status}
                        key={index} index={index}
                        tasks={tasks} setTasks={setTasks}
                        handle={handle}
                        setDate={setDate} setDescription={setDescription} setStatus={setStatus}                        
                        />
                        return null
                    })
                }
        </StyledCardBox>        
    );
}

export default CardBox;
