import React from 'react';
import { StyledForm, StyledDescription, StyledDate, StyledStatus, StyledButton, FormContainer } from './style';

const Form = (props) => {    
    return (
        <FormContainer>
            <StyledForm>
                <StyledDescription type='text' name="description" placeholder='Tarefa' className="description" value={props.description} onInput={event => props.setDescription(event.target.value)} />
                <StyledDate type='date' name="date" className="date" value={props.date} onInput={event => props.setDate(event.target.value)} />
                <StyledStatus className="status" value={props.status} onChange={event => props.setStatus(event.target.value)}>
                    <option value="-1">Selecione</option>
                    <option value="0">Para Fazer</option>
                    <option value="1">Fazendo</option>
                    <option value="2">Feito</option>
                </StyledStatus>
                <StyledButton type='button' className="addButton" value='Salvar' onClick={props.save}  />
            </StyledForm>
        </FormContainer>
    );
}

export default Form;