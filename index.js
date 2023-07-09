const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// All get requests are here
app.get("/", (req, res) => { 
    res.sendFile(__dirname + "/index.html");
})

app.get("/triangle", (req, res) => {
    res.sendFile(__dirname + "/triangle.html");
})

app.get("/circle", (req, res) => {
    res.sendFile(__dirname + "/circle.html");
})

app.get('/product/:id([0-9]+)', (req, res) => {
    res.send(`<h1>ID is ${req.params.id}</h1>`)
})

app.use('*', (req, res) => {
    res.status(404).send({
        message : "Not a valid Route"
    })
})



// All post requests are here
app.post('/triangle', (req, res) => {
    const height = req.body.height;
    const base = req.body.base;
    const area = 0.5 * base * height;
    res.send(`<h3>Area of Triangle : ${area} </h3>`)
})

app.post('/circle', (req, res) => {
    const radius = req.body.radius;
    const area = 3.1416 * radius * radius;
    res.send(`<h3>Area of Circle is : ${area}</h3>`)
})




app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
})