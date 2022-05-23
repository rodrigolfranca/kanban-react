import React from 'react';
import { MdModeEditOutline } from 'react-icons/md';
import { BsFillTrashFill } from 'react-icons/bs';
import { CardStyle } from './style';

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
            <p>Prazo: {props.date}</p>
            <div className='icons'>
                <BsFillTrashFill onClick={limpaCard} />
                <MdModeEditOutline onClick={atualizaCard} />
            </div>            
        </CardStyle>
    );
}

export default Card;