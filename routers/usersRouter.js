const express = require('express');
const user_router = express.Router();
var users = require('../models/usersModel');

user_router.get('/:fullName', (req, res) => {
    const val = users.read(req.params.fullName);
    if (val) {
        res.send(val);
    } else {
        res.send({});
    }
});

user_router.post('/register', (req, res) => {
    res.send(users.register(req.body.fullName, req.body.address, req.body.email, req.body.password));
});

module.exports = user_router;
