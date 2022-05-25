import React from 'react';
import { StyledForm, StyledInput, StyledStatus, StyledNest, StyledButton, FormContainer } from './style';

const Form = (props) => {    
    return (
        <FormContainer>
            <StyledForm>
                <StyledNest>
                    <label>Sua Tarefa</label>
                    <StyledInput type='text' name="description" className="description" value={props.description} onInput={event => props.setDescription(event.target.value)} />
                </StyledNest>
                <StyledNest>
                    <label>Prazo</label>
                    <StyledInput type='datetime-local' name="date" className="date" value={props.date} onInput={event => props.setDate(event.target.value)} />
                </StyledNest>
                <StyledNest>
                    <label>Selecione o status</label>
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