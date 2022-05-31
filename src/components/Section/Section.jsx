import React from 'react';
import CardBox from '../CardBox/CardBox';
import { StyledSection } from './style';

const Section = () => {
    return (
        <StyledSection>
            <CardBox
                className="todo" status="0" text="A Fazer"
            />
            <CardBox
                className="doing" status="1" text="Fazendo"
            />
            <CardBox
                className="done" status="2" text="Feito"
            />
        </StyledSection>
    );
}

export default Section;