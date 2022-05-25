import React from 'react';
import { StyledForm, StyledInput, StyledStatus, StyledNest, StyledButton, FormContainer } from './style';

const Form = (props) => {    
    return (
        <FormContainer>
            <StyledForm>
                <StyledNest>
                    <label for='description'>Sua Tarefa</label>
                    <StyledInput type='text' name="description" className="description" value={props.description} onInput={event => props.setDescription(event.target.value)} />
                </StyledNest>
                <StyledNest>
                    <label for='date'>Prazo</label>
                    <StyledInput type='date' name="date" className="date" value={props.date} onInput={event => props.setDate(event.target.value)} />
                </StyledNest>
                <StyledNest>
                    <label for='status'>Selecione o status</label>
                <StyledStatus className="status" name='status' value={props.status} onChange={event => props.setStatus(event.target.value)}>
                    <option value="-1"></option>
                    <option value="0">Para Fazer</option>
                    <option value="1">Fazendo</option>
                    <option value="2">Feito</option>
                </StyledStatus>
                </StyledNest>
                <StyledButton type='button' className="addButton" value='Salvar' onClick={props.save}  />
            </StyledForm>
        </FormContainer>
    );
}

export default Form;