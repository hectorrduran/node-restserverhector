require('./config/config')

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/usuario', function(req, res) {
    res.json('Hello World');
});

app.post('/usuario', function(req, res) {
    let body = req.body;
    res.json({
        body
    });
});

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/usuario', function(req, res) {
    res.json('delete Hello World');
});

app.listen(process.env.PORT, () => {
    console.log("iniciado server");
})