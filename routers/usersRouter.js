const express = require('express');
const user_router = express.Router();
//require đến file ../models/usersModel
var users = require('../models/usersModel');
 
user_router.get('/:fullName', (req, res) => {
    const val = users.read(req.params.fullName);
    if (val) {
        res.send(val);
    } else {
        res.send({});
    }
});
 
//Tạo mới thông tin cmt từ người dùng
user_router.post('/Send', (req, res) => {
    res.send(users.Send(req.body.fullName, req.body.email, req.body.address, req.body.password));
});
 
//Exports cho biến user_router
module.exports = user_router;