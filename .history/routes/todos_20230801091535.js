const express = require('express');
const router = express.Router();

    const todos = [{id: 1,
    title: "Universidad", keywords: ["estudios", "importante", "academia"],
    userId: 1}, {id: 2, title: "Casa", keywords: ["oficio", "necesario", "orden"],
    userId: 1}]

    router.get('/users/:id/todos', (req, res) => {
        const { id } = req.params;
        const todo = todos.filter((todo) => todo.userId === Number(id));
        if (todo) {
            res.json({ ok: true, todo });
        } else {
            res.status(404).json({ ok: false, message: 'User not found' });
        }
    })

module.exports = router;