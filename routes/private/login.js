const knex = require("../../module/db");
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('private/login');
});

router.post('/login', async function (req, res, next) {
    const {login, password} = req.body;
    const [user] = await knex.select("*").from('users').where('login',login);
  
    if (user && password == user.password && user.status) {
        req.session.nameUser = "admin";
        res.status(200).end(); 
    } else {
        res.status(400).end();
    }
  });

module.exports = router;