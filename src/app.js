const express = require('express')

const app = express()

app.get('/', (req, res)  => {
    res.send('Hello from get req.')
})

app.get('/', (req, res)  => {
    res.send('Hello from get req.')
})

app.post('/', (req, res)  => {
    res.send('Hello from post req.')
})

app.get(3000, ()  => {
    console.log('Server on port 3000')
})