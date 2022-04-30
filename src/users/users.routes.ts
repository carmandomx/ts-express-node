import express from 'express'
import { Client, User } from './users.models'
import { insertUser } from './users.repo'
const userRoutes = express.Router()

userRoutes.get('/', (req, res) => res.send('Yet to implement GET /users'))
userRoutes.get('/:id', (req, res) => {
    console.log(req.params)

    res.send(`Yet to implement GET /users/${req.params.id}`)
})
userRoutes.post('/', (req, res ) => {
    console.log(req.body)
    insertUser(req.body)
    res.send("Yet to implement POST /users")
})

export default userRoutes