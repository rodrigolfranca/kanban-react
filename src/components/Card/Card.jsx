import React from 'react';
import { MdModeEditOutline } from 'react-icons/md';
import { BsFillTrashFill } from 'react-icons/bs';
import { CardStyle } from './style';

const date = new Date();
const year = date.getFullYear();
const month = (date.getMonth()+1 >= 10)? (date.getMonth()+1) : "0"+(date.getMonth()+1);
const day = (date.getDate()-1);
const fullDate = year+'-'+month+'-'+day

function Card(props) {    
    function limpaCard(){
        let auxArray = props.array;
        auxArray.splice(props.index, 1);
        props.setArray(auxArray);
        props.handle();        
    }

    function atualizaCard(){
        props.setDescription(props.description)
        props.setDate(props.date)
        props.setStatus(props.status)

        limpaCard();
    }
    
    return (
        <CardStyle className='card'>            
            <p>Tarefa: {props.description}</p>
            <p>Prazo: { (fullDate < props.date)? props.date : props.date+" - Tarefa Expirada"}</p>
            <div className='icons'>
                <BsFillTrashFill onClick={limpaCard} />
                <MdModeEditOutline onClick={atualizaCard} />
            </div>            
        </CardStyle>
    );
}

export default Card;