import express from 'express'
import cors from 'cors'
import fs from 'fs'

const data = JSON.parse(fs.readFileSync('./db.json', 'utf-8')) // Load JSON
const recipes = data.recipes

const app = express()
const PORT = 5000

// Middleware
app.use(cors()) // Let access from React
app.use(express.json())

app.get('/recipes', (req, res) => {
    const page = parseInt(req.query._page) || 1
    const limit = parseInt(req.query._limit) || 2
    const start = (page - 1) * limit
    const end = page * limit

    res.setHeader('X-Total-Count', recipes.length) // Add the header with the total of the recipes.
    res.json(recipes.slice(start, end)) // Return the paginated recipes.
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
