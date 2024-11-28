import { createTheme } from '@mui/material/styles';

const getTheme = (darkMode) =>
  createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#4caf50', // Green
      },
      secondary: {
        main: '#ff5722', // Orange
      },
      background: {
        default: darkMode ? '#121212' : '#f5f5f5', // Dynamic background
        paper: darkMode ? '#1e1e1e' : '#ffffff',  // Componentes in dark mode
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: darkMode ? '#333' : '#ff5722', // Dynamic
          },
        },
      },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
      h1: { fontSize: '2.5rem', fontWeight: 700 },
      h6: { fontSize: '1.25rem', fontWeight: 500 },
    },
  });

export default getTheme;
