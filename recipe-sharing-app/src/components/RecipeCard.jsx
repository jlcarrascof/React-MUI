import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'

function RecipeCard({ title, image }) {
  return (
    <Card>
        <CardMedia
            component="img"
            height="140"
            image={image}
            alt={title}
            sx={{ objectFit: 'cover' }}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {title}
            </Typography>
        </CardContent>
    </Card>
  )
}

export default RecipeCard
