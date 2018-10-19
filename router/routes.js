const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');


router.post('/create' , (req, res) => {
    res = controller.createHandler(req , res);
});