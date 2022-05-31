import React from 'react';
import Form from '../Form/Form';
import Section from '../Section/Section'
import { StyledMain } from './style';

const Main = () => {   

    return (
        <>
            <StyledMain>
                <h1>Gerenciador de Tarefas - Kanban</h1>
                <h4>Cadastrar uma Tarefa</h4>
                <Form/>
                <h4>Quadro de Tarefas</h4>
                <Section/>
            </StyledMain>            
        </>
    );
}

export default Main;