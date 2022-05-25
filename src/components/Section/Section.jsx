import React from 'react';
import Card from '../Card/Card'
import { StyledSection, StyledTodo, StyledDoing, StyledDone } from './style';

const Section = (props) => {
    return (
        <StyledSection>
            <StyledTodo className="todo">
                <h3>A Fazer</h3>
                {                    
                    props.tasks.map((task, index) => {                        
                        if (task.status === '0') return <Card
                        description={task.description} date={task.date} status={task.status}
                        key={index} index={index}
                        tasks={props.tasks} setTasks={props.setTasks}
                        handle={props.handle}
                        setDate={props.setDate} setDescription={props.setDescription} setStatus={props.setStatus}                        
                        />
                        return null
                    })
                }
            </StyledTodo>
            <StyledDoing className="doing">
                <h3>Fazendo</h3>
                {                    
                    props.tasks.map((task, index) => {                        
                        if (task.status === '1') return <Card
                        description={task.description} date={task.date} status={task.status}
                        key={index} index={index}
                        tasks={props.tasks} setTasks={props.setTasks}
                        handle={props.handle}
                        setDate={props.setDate} setDescription={props.setDescription} setStatus={props.setStatus}                        
                        />
                        return null
                    })
                }
            </StyledDoing>
            <StyledDone className="done">
                <h3>Feito</h3>
                {                    
                    props.tasks.map((task, index) => {                        
                        if (task.status === '2') return <Card
                        description={task.description} date={task.date} status={task.status}
                        key={index} index={index}
                        tasks={props.tasks} setTasks={props.setTasks}
                        handle={props.handle}
                        setDate={props.setDate} setDescription={props.setDescription} setStatus={props.setStatus}                        
                        />
                        return null
                    })
                }
            </StyledDone>
        </StyledSection>
    );
}

export default Section;