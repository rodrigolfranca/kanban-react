import Styled from 'styled-components'

export const CardStyle = Styled.div`
    margin: 0px 0px 1px 0px;
    border-collapse: collapse;
    padding: 10px;
    width: 100%;
    height: 200px;
        h2 {
            color: #1B42A5;            
            font-style: normal;
            font-weight: 500px;
            font-size: 18px;
            line-height: 21px;            
        }        
        .CardDescription {
            height: 103px;
            overflow-y: scroll;
            font-weight: 400
        }               
        .icons {
            display: flex;
            flex-direction: row-reverse;
        }            
`;