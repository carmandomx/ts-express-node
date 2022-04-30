import express from 'express';
import dotenv from 'dotenv';

dotenv.config()

const app = express()
const port = process.env.PORT || 3000;

app.get('/' , (req, res) => {
    res.send('Config Express + Node + TS')
})

app.listen(port, () => {
    console.log(`My server is up and running at port: ${port}`)
})