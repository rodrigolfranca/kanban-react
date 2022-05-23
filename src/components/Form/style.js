import Styled from 'styled-components';

export const FormContainer = Styled.div`
    height: 120px;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #7aa0cb;
`

export const StyledForm = Styled.div`
    width: 1100px;
    height: 120px;
    padding: 10px;    
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 25px;
    row-gap: 10px;
    background-color: #7aa0cb;
`;

export const StyledDescription = Styled.input`
    height: 40px;
    width: 500px;
    padding-left: 10px;
    border-radius: 20px;
    border:none;

    font-size: 26px;
    color: #1e1e1e;
`;

export const StyledDate = Styled.input`
    height: 40px;
    width: 200px;
    padding-left: 10px;
    border-radius: 20px;
    border:none;

    font-size: 26px;
    color: #1e1e1e;
`;

export const StyledStatus = Styled.select`
    height: 40px;
    width: 200px;
    padding-left: 10px;
    border-radius: 20px;
    border:none;

    font-size: 26px;
    color: #1e1e1e;
`;

export const StyledButton = Styled.input`
    height: 40px;
    width: 200px;

    text-align: center;    
    border-radius: 20px;
    border:none;

    cursor: pointer;

    font-size: 26px;
    color: #1e1e1e;
`;