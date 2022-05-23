import styled from 'styled-components';

export const StyledSection = styled.div`
    padding: 15px;
    width: 1300px;
    height: 750px;
    display: flex;
    justify-content: space-around;
`;

export const StyledTodo = styled.div`
    height:fit-content;
    width: 300px;
    background-color: #bce0e5;
        h1{
            background-color: #085964;
            color: white;
            text-align: center;
        }
`

export const StyledDoing = styled.div`
    height:fit-content;
    width: 300px;
    background-color: #e5bcc4;
        h1{
            background-color: #760b20;
            color: white;
            text-align: center;
        }
`

export const StyledDone = styled.div`
    height:fit-content;
    width: 300px;
    background-color: #bce5bc;
        h1{
            background-color: #227022;
            color: white;
            text-align: center;
        }
`
