import React from 'react';
import Card from '../Card/Card'
import { StyledSection, StyledTodo, StyledDoing, StyledDone } from './style';

const Section = (props) => {
    return (
        <StyledSection>
            <StyledTodo className="todo">
                <h1>A Fazer</h1>
                {                    
                    props.todo.map( (todo, index) =>
                    <Card
                        description={todo.description} date={todo.date} status="0"
                        key={index} index={index}
                        array={props.todo} setArray={props.setTodo}
                        handle={props.handle}
                        setDate={props.setDate} setDescription={props.setDescription} setStatus={props.setStatus}
                    />)
                }
            </StyledTodo>
            <StyledDoing className="doing">
                <h1>Fazendo</h1>
                {
                    props.doing.map( (doing, index) =>
                    <Card
                        description={doing.description} date={doing.date} status="1"
                        key={index} index={index}
                        array={props.doing} setArray={props.setDoing}
                        handle={props.handle}
                        setDate={props.setDate} setDescription={props.setDescription} setStatus={props.setStatus}
                    />)
                }
            </StyledDoing>
            <StyledDone className="done">
                <h1>Feito</h1>
                {
                    props.done.map( (done, index) =>
                    <Card
                        description={done.description} date={done.date} status="2"
                        key={index} index={index}
                        array={props.done} setArray={props.setDone}
                        handle={props.handle}
                        setDate={props.setDate} setDescription={props.setDescription} setStatus={props.setStatus}
                    />)
                }
            </StyledDone>
        </StyledSection>
    );
}

export default Section;