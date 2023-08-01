const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users =[{id: 1, firstName: 'Daniel', lastName: 'Calvo', email: 'dcalvo@polpocr.com'}, 
{id: 2, firstName: 'Katherine', lastName: 'Calvo', email: 'kcalvo@polpocr.com'}]

app.get('/', (_, res) => {
    res.send('Your Express App');
});

app.get('/users', (_, res) => {
    res.json({ok: true, users});
});

app.get('/user/:id', (req, res) => {
    const { id } = req.params;
    Number(id)
    const user = users.filter((user) => user.id === id)[0];
    if (user) {
        res.json({ ok: true, user });
    } else {
        res.status(404).json({ ok: false, message: 'User not found' });
    }
});

app.post('/users', (req, res) => {
    const { firstName, lastName, email } = req.body;
    if(firstName && lastName && email){
        const id = users.length + 1;
        users.push({ id, firstName, lastName, email});
        res.json({ok: true, users});
    }
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});