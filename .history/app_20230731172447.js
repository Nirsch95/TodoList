const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (_, res) => {
    res.send('Your Express App');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});