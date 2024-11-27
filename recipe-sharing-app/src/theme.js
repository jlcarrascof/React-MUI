import { createTheme } from '@mui/material/styles';

const getTheme = (darkMode) =>
  createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#4caf50', // Verde
      },
      secondary: {
        main: '#ff5722', // Naranja
      },
      background: {
        default: darkMode ? '#121212' : '#f5f5f5', // Fondo dinámico
        paper: darkMode ? '#1e1e1e' : '#ffffff',  // Componentes en modo oscuro
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: darkMode ? '#333' : '#ff5722', // Dinámico
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
