import React from 'react'
import { Card, CardContent } from '@mui/material'

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

        </CardContent>
    </Card>

  )
}

export default RecipeCard
