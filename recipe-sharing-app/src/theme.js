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
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h1: { fontSize: '2.5rem', fontWeight: 700 },
        h6: { fontSize: '1.25rem', fontWeight: 500 },
    },
})

export default theme
