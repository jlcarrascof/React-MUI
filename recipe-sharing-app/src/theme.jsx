import { createTheme } from '@mui/material/styles'

const theme = createTheme({

    palette: {
        mode: 'light',
        primary: {
            main: '#4caf50',
        },
        secondary: {
            main: '#ff5722',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h1: {fontSize: '2.5rem', fontWeight: 700 },
        h2: {fontSize: '1.25rem', fontWeight: 500 },
    },
});

export default theme;
