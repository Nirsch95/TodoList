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

app.get('/user/:name', (req, res) => {
    const { name } = req.params;
    const user = users.find
    if (user) {
        res.json({ ok: true, user });
    } else {
        res.status(404).json({ ok: false, message: 'User not found' });
    }
});

app.post('/adduser', (req, res) => {
    const { name, email } = req.body;
    if(name && email){
        users.push({ name, email});
        res.json({ok: true, users});
    }
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});