import React from 'react'
import { useParams } from 'react-router-dom'

function RecipeDetailsPage() {
  const { id } = useParams()

  return (
    <div>
      <h1>Recipe Details</h1>
      <p>You're in the recipe with ID: { id }</p>
      <p>Here you will see more information about the recipe in the next videos</p>
    </div>
  )
}

export default RecipeDetailsPage
