const express = require('express')
const app = express()
const port = 8080;

//Servir contenido estatico
app.use(express.static('public'));

app.get('/holamundo', (req, res) => {
    res.send('Hello World en su respectiva ruta')
})
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })