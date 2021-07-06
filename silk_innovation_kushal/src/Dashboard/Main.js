import React from "react"
import styled from "styled-components"
import Cards from "./Cards"
import Accordian from "./Accordion"
import RadioIcon from '@material-ui/icons/Radio';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import FlightIcon from '@material-ui/icons/Flight';

const Main = () => {
    return (
        <MainWrapper>

                <div className="cardsContainer">
                <div className="cards" style={{marginRight:"10px"}}>
                    <Cards Icon ={RadioIcon} desc="Local Funds"/>
                </div>
                <div className="cards" style={{marginRight:"10px"}}>
                    <Cards Icon ={AccountBalanceIcon} desc="Bank Transfer"/>
                </div>
                <div className="cards">
                    <Cards Icon={FlightIcon} desc="Send Funds"/>
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
    .cards{
        box-shadow: 10px -1px 27px -2px rgba(0,0,0,0.75);
        -webkit-box-shadow: 10px -1px 27px -2px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px -1px 27px -2px rgba(0,0,0,0.75);
    }
    .cards :hover{
        cursor: pointer;
        transform: scale(1.04);
    }

`;
