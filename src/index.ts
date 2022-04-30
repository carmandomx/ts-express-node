import express, { Express, Request, Response } from 'express'
import { User, Organization } from './users/users.models'
import dotenv from 'dotenv';
import userRoutes from './users/users.routes'

dotenv.config()

const app: Express = express()
const port = process.env.PORT





const rootRouter = express.Router()
rootRouter.get('/', (req: Request, res: Response) => {
    res.send('Config Express + Node + TS but dev friendly')
})


// Users'routes
rootRouter.use('/users', userRoutes)
// Organizations' routes
// rootRouter.use('/orgs', orgsRoutes)
app.use(express.json())
app.use(rootRouter)

app.listen(port, () => {
    console.log('Server is up and running')
})

// GET users/:userId
// POST users
// PUT users/:userId
// DELETE users/:userId

// GET orgs/:orgId
// POST orgs
