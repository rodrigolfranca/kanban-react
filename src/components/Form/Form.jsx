import React, {useContext} from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import { StyledForm, StyledInput, StyledStatus, StyledNest, StyledButton, FormContainer } from './style';

const Form = () => {

    const {description, setDescription, date, setDate, status, setStatus, save} = useContext(TaskContext);
    console.log(useContext(TaskContext))
    

    return (
        <FormContainer>
            <StyledForm>
                <StyledNest>
                    <label>Sua Tarefa</label>
                    <StyledInput type='text' name="description" className="description" value={description} onInput={event => setDescription(event.target.value)} />
                </StyledNest>
                <StyledNest>
                    <label>Prazo</label>
                    <StyledInput type='datetime-local' name="date" className="date" value={date} onInput={event => setDate(event.target.value)} />
                </StyledNest>
                <StyledNest>
                    <label>Selecione o status</label>
                <StyledStatus className="status" name='status' value={status} onChange={event => setStatus(event.target.value)}>
                    <option value="-1"></option>
                    <option value="0">Para Fazer</option>
                    <option value="1">Fazendo</option>
                    <option value="2">Feito</option>
                </StyledStatus>
                </StyledNest>
                <StyledButton type='button' className="addButton" value='Salvar' onClick={save}  />
            </StyledForm>
        </FormContainer>
    );
}

export default Form;