import React, { useEffect, useState } from 'react'
import { Box, Grid, Typography, styled } from '@mui/material'
import { Search } from '@mui/icons-material'
import Input from '@mui/joy/Input';
import { getAllRecipe } from '../services/api'
import RecipeDetail from './RecipeDetail';

const Header = styled(Typography)({
    fontSize: 35,
    textAlign: 'center',
    fontFamily: 'fantasy',
});

const StyledInput = styled(Input)`
    width: 40%;
    border-radius: 0;
`;

const IconWrapper = styled(Box)({
    backgroundColor: '#0099e6',
    color: '#fff',
    width: 45,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0 7px 7px 0'
});

const Container = styled(Box)({
    display: 'flex',
    justifyContent: 'center'
});

const Text = styled(Typography)({
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'monospace',
    color: '#a4c1c1'
})

const Recipe = () => {
    const [input, setInput] = useState('pizza');
    const [recipe, setRecipe] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        getRecipe();
    }, [input])

    const getRecipe = async () => {
        let response = await getAllRecipe(input)
        
        if(response && response.recipes) {
            setRecipe(response.recipes);
        }
        else {
            setError(true);
        }
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <Box>
            <Header>Search <span style={{ color: 'blue' }}>Recipes</span> You Need</Header>
            <Text>Input Recipes Separated By Comma</Text>
            <Container>
                <StyledInput
                    color="primary"
                    placeholder="tomato, potato, pizza"
                    size="md"
                    variant="soft"
                    onChange={(e) => handleChange(e)}
                />
                <IconWrapper><Search /></IconWrapper>
            </Container>
            <Grid container>
                {
                    recipe.map(data =>  {
                        return (
                            <Grid item xs={12} sm={12} md={4} lg={4} key={data.recipe_id}>
                                <RecipeDetail data={data} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box>
    )
}

export default Recipe
