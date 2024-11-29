import { Box, TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'

function AddRecipePage() {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    console.log(data) // Temporary: verify data
  }

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }} >
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Recipe Title"
          variant="outlined"
          fullWidth
          {...register('title', { required: 'Title is required' })}
          error={!!errors.title}
          helperText={errors.title?.message}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          {...register('description', { required: 'Description is required' })}
          error={!!errors.description}
          helperText={errors.description?.message}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Recipe
        </Button>
      </form>
    </Box>
  )
}

export default AddRecipePage
