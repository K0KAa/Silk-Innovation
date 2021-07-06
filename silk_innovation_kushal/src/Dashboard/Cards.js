import React from 'react'
import {  Card, CardContent, Typography } from '@material-ui/core'
import styled from 'styled-components'

//Material UI Card
const Cards = () => {
    return (
        <CardWrapper>
            <Card className="card">
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="h5" component="h2">
                        belent
                    </Typography>
                    <Typography color="textSecondary">
                        adjective
                    </Typography>
                    <Typography variant="body2" component="p">
                        well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
                </CardContent>

            </Card>
        </CardWrapper>
    )
}

export default Cards

const CardWrapper = styled.div `
    height: 10rem
`;