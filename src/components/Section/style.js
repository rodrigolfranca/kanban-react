import styled from 'styled-components';

export const StyledSection = styled.div`
    margin: 0;
    padding: 15px;
    width: 1300px;
    height: 750px;
    display: flex;
    justify-content: space-around;
        .todo {
            background-color:#FFD0D0 ;
                h3{
                    background-color: #D21B1B ;
                }
                .card{
                    border: 1px solid #D21B1B;
                }
        }
        .doing {
            background-color: #FFFDCE;
                h3 {
                    background-color: #DFD600;
                }
                .card{
                    border: 1px solid #DFD600;
                }
        }
        .done {
            background-color: #DFFAE8;
                h3{
                    background-color: #0CE155;
                }
                .card{
                    border: 1px solid #0CE155;
                }


        }
`;