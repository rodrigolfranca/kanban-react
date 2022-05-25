import React from 'react';
import CardBox from '../CardBox/CardBox';
import { StyledSection } from './style';

const Section = (props) => {
    return (
        <StyledSection>
            <CardBox
                className="todo" status="0" text="A Fazer"
                tasks={props.tasks} setTasks={props.setTasks}
                handle={props.handle}
                setDate={props.setDate} setDescription={props.setDescription} setStatus={props.setStatus}
            />
            <CardBox
                className="doing" status="1" text="Fazendo"
                tasks={props.tasks} setTasks={props.setTasks}
                handle={props.handle}
                setDate={props.setDate} setDescription={props.setDescription} setStatus={props.setStatus}
            />
            <CardBox
                className="done" status="2" text="Feito"
                tasks={props.tasks} setTasks={props.setTasks}
                handle={props.handle}
                setDate={props.setDate} setDescription={props.setDescription} setStatus={props.setStatus}
            />
        </StyledSection>
    );
}

export default Section;