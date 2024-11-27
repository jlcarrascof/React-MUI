import { CardMedia, Card, CardContent, Typography, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

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
