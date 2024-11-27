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
        h1: {},
        h2: {},
    },
});

export default theme;
