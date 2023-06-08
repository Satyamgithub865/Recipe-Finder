import { Button, Card, CardContent, Typography, Box, styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const CardContainer = styled(Card)({
    padding: 20,
    margin: '20px 30px',
});

const Title = styled(Typography)({
    fontSize: 25,
    fontFamily: 'serif',
    fontWeight: 600
});

const Publisher = styled(Typography)({
    color: '#999900',
});

const ButtonContainer = styled(Box)({
    '& > a': {
        marginLeft: 10
    }
})

const RecipeDetail = ({ data }) => {
  return (
    <CardContainer>
        <img style={{height: 200, width: '100%'}} src={data.image_url} alt="img-info" />
        <CardContent>
            <Title>{data.title}</Title>
            <Publisher>{data.publisher}</Publisher>
        </CardContent>
        <ButtonContainer>
            <Link to={data.publisher_url} target='_blank'><Button variant='contained'>Details</Button></Link>
            <Link to={data.source_url} target='_blank'><Button variant='contained' color='success'>Recipe URL</Button></Link>
        </ButtonContainer>
    </CardContainer>
  )
}

export default RecipeDetail
