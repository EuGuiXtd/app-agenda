// src/app.js

const express = require('express');

const app = express();

const User = require('./controllers/user.controller');

app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

app.get('/user', User.getAll);

app.post('/user', User.addUser);

app.delete('/user/:id', User.deleteUser);

module.exports = app;