import React, { useEffect, useState } from 'react'
import { Box, Grid } from '@mui/material'
import RecipeCard from '../components/RecipeCard'

function HomePage() {

    const [recipes, setRecipes] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        fetch(`http://localhost:5000/recipes?_page=${page}&_limit=2`)
          .then((response) => {
            setTotalPages(Math.ceil(response.headers.get('X-Total-Count') / 2))
            return response.json()
          })
          .then((data) => setRecipes(data))
          .catch((error) => console.error('Error fetching recipes:', error))
    }, [page])

    return (
        <Box sx={{ padding: '20px' }}>
            <Grid container spacing={3}>
                {recipes.map((recipe) => (
                    <Grid item xs={12} sm={6} md={4} key={recipe.id}>
                        <RecipeCard
                            id={recipe.id}
                            title={recipe.title}
                            description={recipe.description}
                            image={recipe.image}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default HomePage
