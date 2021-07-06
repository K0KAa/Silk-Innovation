import React from 'react'
import styled from "styled-components"
import Cards from './Cards'
import Accordian from './Accordion'

const Main = () => {
    return (
        <MainWrapper>

                <div className="cardsContainer">
                <div style={{marginRight:"10px"}}>
                    <Cards />
                </div>
                <div style={{marginRight:"10px"}}>
                    <Cards />
                </div>
                <div>
                    <Cards />
                </div>
                </div>
                <div className ="accordion">
                    <div style={{marginBottom: "10px"}}>   
                        <Accordian className="singleAccordion"/>
                    </div>
                    <Accordian className="singleAccordion" />
                </div>
        </MainWrapper>
    )
}

export default Main

const MainWrapper = styled.div `
    margin-top: 1rem;
    height: 86vh;
    margin-right: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    .cardsContainer{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin-bottom: 1rem;
    }

    .accordion{
        display:flex;
        flex-direction: column;
        justify-content: space-around;
    }

`;
