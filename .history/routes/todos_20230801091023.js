const express = require('express');
const router = express.Router();

const todos = [{id: 1,
    title: "Universidad", keywords: ["estudios", "importante", "academia"],
    userId: 1}, {id: 2, title: "Casa", keywords: ["oficio”, “necesario”, “orden”],
    userId: 1}]

module.exports = router;