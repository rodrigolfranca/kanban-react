import {createGlobalStyle} from 'styled-components'

<style>
    @import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');
</style> 

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    body{
        background-color: #fefefe;
        font-family: "Oxygen", Arial, Helvetica, sans-serif;
    }
`; 