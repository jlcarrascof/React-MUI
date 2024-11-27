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
      <HomePage />
    </Router>
  )
}

export default App
