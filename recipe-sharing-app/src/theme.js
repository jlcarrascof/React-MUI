import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
      mode: 'light', // Comenzamos con el modo claro por defecto
      primary: {
        main: '#4caf50', // Verde
      },
      secondary: {
        main: '#ff5722', // Naranja
      },
    },



})

export default theme
