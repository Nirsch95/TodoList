const express = require('express');
const router = express.Router();

    const todos = [{id: 1,
    title: 'Universidad', keywords: ['estudios', 'importante', 'academia'],
    userId: 1}, {id: 2, title: 'Casa', keywords: ['oficio', 'necesario', 'orden'],
    userId: 1}]

    const tasks = [{id: 1, title: 'Estudiar para el examen de programación', completed: 0, todoId: 1, userId: 1}, 
    {id: 2, title: 'Ir a clases', completed: 1, todoId: 1, userId: 1}]

    router.get('/users/:id/todos', (req, res) => {
        const { id } = req.params;
        const todo = todos.filter((todo) => todo.userId === Number(id));
        if (todo) {
            res.json({ ok: true, todo });
        } else {
            res.status(404).json({ ok: false, message: 'User not found' });
        }
    })

    router.get('/todos/:id', (req, res) => {
        const { id } = req.params;
        const todo = todos.filter((todo) => todo.id === Number(id))[0];
        todo.todos = tasks.filter((todo) => tasks.todoId === todo.id);
        
        if(todo){
            res.json({ ok: true, todo });
        } else {
            res.status(404).json({ ok: false, message: 'User not found' });
        }
    })

module.exports = router;