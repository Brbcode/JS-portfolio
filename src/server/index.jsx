import * as Books from './Books.jsx';

const path = require('path');

const express = require('express');

const app = express();
const dist = path.join(__dirname, '..');
console.log(dist);
const port = 3000;

app.use(express.static(dist));

app.get('/books', (req, res) => {
  res.json(Books.getAll());
});

app.get('*', (req, res) => {
  // res.send('Hello World!');
  res.sendFile(path.join(dist, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
