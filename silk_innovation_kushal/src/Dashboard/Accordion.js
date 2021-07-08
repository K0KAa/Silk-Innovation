import React from 'react'
import {Card, CardContent } from '@material-ui/core'
import styled from "styled-components"
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
//Material UI Card

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(0),
      },
    },
  }));
  
const Accordian = ({image}) => {
    const classes = useStyles();

    return (
        <CardWrapper>
            <Card className="card">
                
                    {image && <img src ={image} alt="Laptop and Notebook"/> }
                       <div style={{width: "100%", display:"flex", justifyContent: "center", alignItems: "center"}}>
                        <div style={{width: "5rem", height: "5rem"}}>
                            <Fab color="secondary" aria-label="add">
                                <AddIcon />                    
                            </Fab>
                        </div>
                       </div>


            </Card>
        </CardWrapper>
    )
}

export default Accordian


const CardWrapper = styled.div`
    height: 9rem;
    
    box-shadow: 10px -1px 10px -2px rgba(0,0,0,0.75);
    -webkit-box-shadow: 10px -1px 10px -2px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px -1px 10px -2px rgba(0,0,0,0.75);
    .card{
        height: 100%;
    }
    .img{
        height: 100%;
        /* Center and scale the image nicely */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

`;