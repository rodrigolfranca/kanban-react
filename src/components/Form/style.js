import Styled from 'styled-components';

export const FormContainer = Styled.div`
    height: 120px;
    width: 100%;
    display: flex;
    justify-content: center;    
`

export const StyledForm = Styled.div`
    width: 1120px;
    height: 120px;
    padding: 10px;    
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 25px;
    row-gap: 20px;    
`;

export const StyledNest = Styled.div`
    height: 40px;
    width: 350px;
    margin-top: 10px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    row-gap: -1px;

        label {
            width: 350px;
            height: 1px;
            color: #26038A;
            z-index: +1;

            text-align: center;
        }

`;

export const StyledInput = Styled.input`
    margin-top: 8px;
    height: 40px;
    width: 350px;    
    padding-left: 10px;
    background: #FFFFFF;
    border-width: 0px 1px 1px 1px;
    border-style: solid;
    border-color: #26038A;
    border-radius: 10px;

    font-size: 26px;
    color: #1e1e1e;        
`;

export const StyledStatus = Styled.select`
    margin-top: 8px;
    height: 40px;
    width: 350px;
    padding-left: 10px;
    background: #FFFFFF;
    border-width: 0px 1px 1px 1px;
    border-style: solid;
    border-color: #26038A;
    border-radius: 10px;

    font-size: 26px;
    color: #1e1e1e;
`;

export const StyledButton = Styled.input`
    width: 532px;
    height: 60px;

    text-align: center;    
    background: #1B42A5;
    border-radius: 5px;
    border:none;

    cursor: pointer;

    font-size: 26px;
    color: #ffffff;
`;