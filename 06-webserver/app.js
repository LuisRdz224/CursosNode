const express = require('express')
const app = express()
const port = 8080;

app.get('/', (req, res) => {
    res.send('Home Page')
})
app.get('/holamundo', (req, res) => {
    res.send('Hello World en su respectiva ruta')
})
app.get('*', (req, res) => {
    res.send('404 | Page not found')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })