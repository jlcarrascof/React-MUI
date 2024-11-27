import React from 'react'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <div>
      <Header />
      <HomePage />
    </div>
  )
}

export default App
