const mysql = require("mysql");
const knex = require("../../module/db");
var express = require('express');
var router = express.Router();

router.get('/',  function(req, res, next) {
  res.render('public/index');
});


module.exports = router;
