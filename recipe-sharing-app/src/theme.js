import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
      mode: 'light', // Let's beging with the light mode by default.
      primary: {
        main: '#4caf50', // Green
      },
      secondary: {
        main: '#ff5722', // Orange
      },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h1: { fontSize: '2.5rem', fontWeight: 700 },
        h6: { fontSize: '1.25rem', fontWeight: 500 },
    },
})

export default theme
