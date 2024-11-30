import React from 'react'
import { Box, Grid } from '@mui/material'
import RecipeCard from '../components/RecipeCard'

function HomePage() {

    const [recipes, setRecipes] = React.useState([])

    return (
        <Box sx={{ padding: '20px' }}>
            <Grid container spacing={3}>
                {recipes.map((recipe) => (
                    <Grid item xs={12} sm={6} md={4} key={recipe.id}>
                        <RecipeCard title={recipe.title} image={recipe.image} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default HomePage
