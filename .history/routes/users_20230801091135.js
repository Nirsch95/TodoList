const express = require('express');
const router = express.Router();

const users =[{id: 1, firstName: 'Daniel', lastName: 'Calvo', email: 'dcalvo@polpocr.com'}, 
{id: 2, firstName: 'Katherine', lastName: 'Calvo', email: 'kcalvo@polpocr.com'}]

router.get('', (_, res) => {
    res.json({ok: true, users});
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const user = users.filter((user) => user.id === Number(id))[0];
    if (user) {
        res.json({ ok: true, user });
    } else {
        res.status(404).json({ ok: false, message: 'User not found' });
    }
});

router.post('', (req, res) => {
    const { firstName, lastName, email } = req.body;
    if(firstName && lastName && email){
        const id = users.length + 1;
        users.push({ id, firstName, lastName, email});
        res.json({ok: true, users});
    }
});

router.get('/:id/todos', (req, res) => {
    const { id } = req.params;
    const todo = todos.filter((user) => user.id === Number(id))[0];
})

module.exports = router;