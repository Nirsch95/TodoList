const http = require('http');

http.createServer((_, res) => {
    res.write('My NodeJS Server is Live!');
    res.end
})