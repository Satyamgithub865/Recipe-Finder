import React from 'react'
import '../App.css'
import { Box, Button, styled } from '@mui/material'
import { Link } from 'react-router-dom'

const StyledBox = styled(Box)`
  background-image: url('https://pixabay.com/get/g6dea8796cf17acb083521d6ed72aca884b3cc1814a281fa9603c2189355fa9b609ca80fbbc0895f4e82fceda9ced6233e4f6618fd2153206788d53a8a4b3ce77_1280.jpg');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 91vh;
  position: relative;
`;

const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  fontSize: 20,
  letterSpacing: 5,
  position: 'absolute',
  top: '35%',
  left: '30%',
  right: '30%'
});

const Btn = styled(Button)`
  padding: 10px 16px;
  font-size: 20px;
  font-weight: 600;
  color: #4dff4d;
`

const Home = () => {
  return (
    <StyledBox>
      <Container>
        <h1>Get the recipe you need</h1>
        <Link to='/recipe'><Btn variant='contained'>SEARCH RECIPE</Btn></Link>
      </Container>
    </StyledBox>
  )
}

export default Home
