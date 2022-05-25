import React from 'react';
import Card from "../Card/Card"
import { StyledCardBox } from './style';

const CardBox = (props) => {
    return (        
        <StyledCardBox className={props.className}>
                <h3>{props.text}</h3>
                {                    
                    props.tasks.map((task, index) => {                        
                        if (task.status === props.status) return <Card
                        description={task.description} date={task.date} status={task.status}
                        key={index} index={index}
                        tasks={props.tasks} setTasks={props.setTasks}
                        handle={props.handle}
                        setDate={props.setDate} setDescription={props.setDescription} setStatus={props.setStatus}                        
                        />
                        return null
                    })
                }
        </StyledCardBox>        
    );
}

export default CardBox;
