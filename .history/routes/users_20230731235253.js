const express = require('express');
const router = express.Router;

router.get('/', (_, res) => {
    res.send('Your Express App');
});

router.get('/users', (_, res) => {
    res.json({ok: true, users});
});

app.get('/user/:id', (req, res) => {
    const { id } = req.params;
    const user = users.filter((user) => user.id === Number(id))[0];
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

module.exports = router;