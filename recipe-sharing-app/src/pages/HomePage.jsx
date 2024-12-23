import React, { useEffect, useState } from 'react'
import { Box, Grid, Pagination } from '@mui/material'
import RecipeCard from '../components/RecipeCard'

function HomePage() {

    const [recipes, setRecipes] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {

        console.log("Current page:", page);

        async function fetchRecipes() {
            try {
                const response = await fetch(`http://localhost:5000/recipes?_page=${page}&_limit=2`)

                // Ensure the X-Total-Count header is present.
                const totalCount = response.headers.get('X-Total-Count');
                if (totalCount) {
                    setTotalPages(Math.ceil(totalCount / 2)) // Update total pages based on total count.
                    console.log("Total pages:", Math.ceil(totalCount / 2)); // Verifica el número total de páginas
                } else {
                    console.warn('X-Total-Count header is missing');
                    setTotalPages(1) // Default if no header.
                }

                const data = await response.json()
                setRecipes(data) // Update recipes state.
                console.log("Fetched recipes:", data); // Verifica los datos obtenidos
            } catch (error) {
                console.error('Error fetching recipes:', error)
            }
        }

        fetchRecipes()
    }, [page]) // Trigger fetch when `page` changes.

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
            <Pagination
                count={totalPages}
                page={page}
                onChange={(event, value) => {
                    console.log("Pagination clicked, new page:", value); // Verifica la nueva página seleccionada
                    setPage(value); // Actualiza la página
                }}
                sx={{ mt: 3 }}
            />
        </Box>
    )
}

export default HomePage
