import React, { useEffect, useState } from 'react'
import { Box, Grid } from '@mui/material'
import RecipeCard from '../components/RecipeCard'

function HomePage() {

    const [recipes, setRecipes] = React.useState([])

    useEffect(() => {
        fetch('http://localhost:5000/recipes')
          .then((response) => response.json())
          .then((data) => setRecipes(data))
          .catch((error) => console.error('Error fetching recipes:', error))
    }, [])

    return (
        <Box sx={{ padding: '20px' }}>
            <Grid container spacing={3}>
                {recipes.map((recipe) => (
                    <Grid item xs={12} sm={6} md={4} key={recipe.id}>
                        <RecipeCard title={recipe.title} description={recipe.description} image={recipe.image} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default HomePage
