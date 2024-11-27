import React, { useState, useMemo } from 'react';
import Header from './components/Header'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import getTheme from './theme'; // Nueva función para tema dinámico
import AddRecipePage from './pages/AddRecipePage'
import RecipeDetailsPage from './pages/RecipeDetailsPage'

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(() => getTheme(darkMode), [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
      <Header toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/add-recipe' element={<AddRecipePage />} />
          <Route path='/recipe/:id' element={<RecipeDetailsPage />} />
          <Route path='*' element={<h1>404 - Page not Found!</h1>} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
