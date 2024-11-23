import React from 'react'
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material'

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
            <Button size="small" color="primary">
                See more
            </Button>
        </CardContent>
    </Card>
  )
}

export default RecipeCard
