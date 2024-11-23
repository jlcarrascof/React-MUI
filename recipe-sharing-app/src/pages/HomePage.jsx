import React from 'react'
import { Box } from '@mui/material'

function HomePage() {

    const recipes = [
        { id: 1, title: 'Caesar Salad', image: '/images/cesar.jpg' },
        { id: 2, title: 'Tomato Soup', image: '/images/tomato.jpg' },
        { id: 3, title: 'Margarita Pizza', image: '/images/pizza.jpg' },
    ]

    return (
        <Box sx={{ padding: '20px' }}>
            <Grid container spacing={3}>
                {recipes.map((recipe) => (
                    <Grid item xs={12} sm={6} md={4} key={recipe.id}>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default HomePage
