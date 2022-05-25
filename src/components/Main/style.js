import Styled from "styled-components";

export const StyledMain = Styled.div`
    margin: 0 auto;
    width: 100%;
    height: fit-content;
    background-color:#FFFFFF;

    display:flex;
    justify-content: center;
    align-content: center;
    flex-wrap:wrap;

    border: 1px black solid;
        h1 {
            width: 100%;
            height: 100px;
            text-align: center;
            background: #26038A;
            padding-top: 29px;

            font-style: normal;
            font-weight: 700;
            font-size: 40px;
            line-height: 47px;
            color: #FFFFFF;            
        }
        h4 {
            font-style: normal;
            font-weight: 700;
            font-size: 30px;
            line-height: 35px;
            margin: 30px 0 0px;
            color: #26038A;

            width: 1247px;
            border-bottom: 1px solid #26038A
        }
`