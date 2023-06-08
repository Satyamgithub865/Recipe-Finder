import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material'
import { logo } from '../constants/constant'
import { Link } from 'react-router-dom'

const Navbar = styled(AppBar)`
    background: #fff;
`;

const Menu = styled(Link)`
    color: black;
    padding: 16px;
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
`

const NavBar = () => {
  return (
    <Navbar position='static'>
        <Toolbar>
            <img src={logo} alt="logo" style={{height:50}} />
            <Menu to='/'>Home</Menu>
            <Menu to='/recipe'>Recipe</Menu>
            <Menu to='/recipeList' style={{marginLeft:'auto', fontSize:14, color: 'crimson'}}>Supported Recipe List</Menu>
        </Toolbar>
    </Navbar>
  )
}

export default NavBar
