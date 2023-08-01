const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users = [{name: 'John', email: 'john@example.com'}]

app.get('/', (_, res) => {
    res.send('Your Express App');
});

app.get('/users', (_, res) => {
    res.json({ok: true, users});
});

app.post('/adduser', (req, res) => {
    const { name, email } = req.body;
    if
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});