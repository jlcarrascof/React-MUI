import React from 'react'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddRecipePage from './pages/AddRecipePage'
import RecipeDetailsPage from './components/RecipeDetailsPage'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/add-recipe' element={<AddRecipePage />} />
        <Route path='/recipe/:id' element={<RecipeDetailsPage />} />
        <Route path='*' element={<h1>404 - Page not Found!</h1>} />
      </Routes>
    </Router>
  )
}

export default App
