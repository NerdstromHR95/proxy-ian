const express = require('express');
const path = require('path');
const app = express ();
const proxy = require('http-proxy-middleware')


app.use('/:productId/reviews/*', proxy({target: 'http://localhost:3002'}));

app.use('/:id', express.static(path.join(__dirname, '/../public')));

app.use('/random/*', proxy({target: 'http://localhost:3003'}));

app.use('/details/*', proxy({target: 'http://localhost:3004'}));

app.use('/photo/*', proxy({target: 'http://localhost:3001'}));


app.listen(3000, () => console.log('proxy server is listening on port 3000'));