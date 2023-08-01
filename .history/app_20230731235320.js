const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users =[{id: 1, firstName: 'Daniel', lastName: 'Calvo', email: 'dcalvo@polpocr.com'}, 
{id: 2, firstName: 'Katherine', lastName: 'Calvo', email: 'kcalvo@polpocr.com'}]

app.use('')

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});