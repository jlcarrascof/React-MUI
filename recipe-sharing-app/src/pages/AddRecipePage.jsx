import { Box } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'

function AddRecipePage() {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    console.log(data) // Temporary: verify data
  }

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }} >

    </Box>
  )
}

export default AddRecipePage
