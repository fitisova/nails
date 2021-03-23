const mysql = require("mysql");
const knex = require("../../module/db");
var express = require('express');
var router = express.Router();

router.get('/', async function (req, res, next) {
  try {
    let prise = await knex.select(["name", "price"]).from("price");
    let work = await knex.select(["imgSrc"]).from("works");
    let workStaticOne = [];
    let workStaticTwo = [];
    let workStatic = [];
    for (let i = 0; i <= 3; i++) {
      workStaticOne[i] = work[i];
    }
  
    for (let i = 0; i <= 7; i++) {
      workStatic[i] = work[i];
    }

    let workDinamick = work.filter(el => !workStatic.includes(el));
    res.render('public/index', {
      prise: prise,
      workStaticOne: workStaticOne,
      workDinamick: workDinamick
    });
  } catch (error) {
    next(error);
  }

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