import React from 'react'
import { useForm } from 'react-hook-form'

function AddRecipePage() {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    console.log(data) // Temporary: verify data
  }

  return (
    <div>
      <h1>Add a New Recipe</h1>
      <p>Here you can create new recipes to sharing with your friends</p>
    </div>
  )
}

export default AddRecipePage
