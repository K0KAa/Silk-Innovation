import React from 'react'
import styled from "styled-components"

//Material UI card For Sidebar
const CardSidebarRight = ({Icon, title, desc}) => {
    return (
        <>
        <CardWrapper>
            <div className="card">
                <h4>{title}</h4>
                <Icon />
            </div>
            {desc &&
                <p className="description">{desc}</p>
            }
        </CardWrapper>
       
        </>
    )
}

export default CardSidebarRight

const CardWrapper = styled.div`
    margin: 15px 15px 0px 0px;
    .card{
        width: 10rem;
        height: 6.5rem;
        border-radius: 5px;
        box-shadow: -9px 10px 21px 0px rgba(0,0,0,0.75);    
        -webkit-box-shadow: -9px 10px 21px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: -9px 10px 21px 0px rgba(0,0,0,0.75);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .description{
        width: 10rem;
        text-align: center;
        background: aqua;
        border-radius: 7px;
    }
`;


