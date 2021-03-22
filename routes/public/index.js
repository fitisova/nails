const mysql = require("mysql");
const knex = require("../../module/db");
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('public/index');
});

router.post('/addUser', async function (req, res, next) {
  const {
    phone
  } = req.body;
  try {
    await knex('users').insert({
      phone: phone,
      status: 0
    })
    res.status(200).end();
  } catch (error) {
    next(error);
  }
});
module.exports = router;