import Styled from 'styled-components'

export const CardStyle = Styled.div`
    margin: 0px;
    border-collapse: collapse;
    padding: 10px;
    width: 100%;
    height: fit-content;
    border: 1px black solid;
        p:first-child {
            height: 54px;
            overflow-y: scroll;
            font-weight: 400
        }
        p {
            font-weight: bold
        }
        
        .icons {
            display: flex;
            flex-direction: row-reverse;
        }            
`;