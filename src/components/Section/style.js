import styled from 'styled-components';

export const StyledSection = styled.div`
    margin: 0;
    padding: 15px;
    width: 1300px;
    height: 750px;
    display: flex;
    justify-content: space-around;
`;

export const StyledTodo = styled.div`
    height:fit-content;
    width: 400px;
    background-color: #FFD0D0;
        h3{
            height: 70px;
            background-color: #D21B1B;
            color: white;
            text-align: center;
            padding-top: 21px;
            margin-bottom: 1px;

            font-style: normal;
            font-weight: 500;
            font-size: 25px;
            line-height: 29px;
            text-align: center;
        
        }
        .card{
            border: 1px solid #D21B1B;
        }
`;

export const StyledDoing = styled.div`
    height:fit-content;
    width: 400px;
    background-color: #FFFDCE;
        h3{
            height: 70px;
            background-color: #DFD600;
            color: white;
            text-align: center;
            padding-top: 21px;
            margin-bottom: 1px;

            font-style: normal;
            font-weight: 500;
            font-size: 25px;
            line-height: 29px;
            text-align: center;
        }
        .card{
            border: 1px solid #DFD600;
        }
`;

export const StyledDone = styled.div`
    height:fit-content;
    width: 400px;
    background-color: #DFFAE8;
        h3{
            height: 70px;
            background-color: #0CE155;
            color: white;
            text-align: center;
            padding-top: 21px;
            margin-bottom: 1px;

            font-style: normal;
            font-weight: 500;
            font-size: 25px;
            line-height: 29px;
            text-align: center;
        }
        .card{
            border: 1px solid #0CE155;
        }
`;