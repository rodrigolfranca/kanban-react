import React from 'react';
import { MdModeEditOutline } from 'react-icons/md';
import { BsFillTrashFill } from 'react-icons/bs';
import { CardStyle } from './style';

const date = new Date();
const year = date.getFullYear();
const month = (date.getMonth()+1 >= 10)? (date.getMonth()+1) : "0"+(date.getMonth()+1);
const day = (date.getDate()-1);
const hour = (date.getHours() < 10)? ("0"+date.getHours()) : (JSON.stringify(date.getHours()));
const minutes = (date.getMinutes() < 10)? ("0"+date.getMinutes()) : (JSON.stringify(date.getMinutes()));
const todayDate = year+'-'+month+'-'+day;
const todayHour = hour+":"+minutes;

function Card(props) {
    
    function cleanCard(){
        let auxArray = props.tasks;
        auxArray.splice(props.index, 1);
        props.setTasks(auxArray);
        props.handle();        
    }

    function updateCard(){
        props.setDescription(props.description)
        props.setDate(props.date)
        props.setStatus(props.status)

        cleanCard();
    }
    function comparaData(){
        let time = props.date.split(" ")[0];        
        let hour = props.date.split(" ")[1];
        if ( (todayDate < time && todayHour < hour) || props.status === "2" ) return props.date;
        return props.date+" - Tarefa Expirada"
    }
    
    return (
        <CardStyle className='card'>            
            <h2>Descrição:</h2>
            <p className='CardDescription'>{props.description}</p>
            <h2>Prazo:</h2>
            <p>{comparaData()}</p>
            <div className='icons'>
                <BsFillTrashFill onClick={cleanCard} />
                <MdModeEditOutline onClick={updateCard} />
            </div>            
        </CardStyle>
    );
    
}

export default Card;