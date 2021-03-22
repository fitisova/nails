const mysql = require("mysql");
const knex = require("../../module/db");
var express = require('express');
var router = express.Router();
const session = require('express-session');
const forms  = require("../../module/fileLoader");


// Прайс 
router.get('/', async function(req, res, next) {
    const result = await knex.select("*").from("price");
    res.render('private/price',{price:result});
});

router.get('/price', function(req, res, next) {
    res.render('private/priceAdd');
});

router.post('/priceAdd',forms.none(), async function(req, res, next) {
    const {name,price} = req.body;
    await knex('price').insert({
        name: decodeURI(name),
        price: decodeURI(price)
    });
    res.end();
});

router.delete('/price/delite:id', async function (req, res, next) {
    let id = req.params.id
    try {
        await knex('price').where('id', id).del();
        res.status(200).end();
    } catch (error) {
        next(error);
    }
});

router.get('/price/update:id', async function (req, res, next) {
    try {
        let id = req.params.id;
        const [result] = await knex.select("*").from("price")
        .where({'id': id});
        req.status = 201;
        res.render('private/priceUpdete', {
            result
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
});

router.patch('/price/update:id', forms.none(), async function (req, res, next) {
    const {name,price} = req.body;
    const id = req.params.id;
    await knex('price').where('id', id).update({
        name: decodeURI(name),
        price: decodeURI(price)
    });
    res.end();
});

// Прошлые работы
router.get('/works', async function(req, res, next) {
    const result = await knex.select("*").from("works");
    res.render('private/works',{works:result});
});

router.get('/worksAdd', async function(req, res, next) {
    res.render('private/worksAdd');
});

router.post('/works/worksAdd',forms.single('file'), async function(req, res, next) {
    let fileSrc = '/images/' + req.file.filename;
    await knex('works').insert({
        imgSrc: fileSrc,
    });
    res.end();
});

router.delete('/works/delite:id', async function (req, res, next) {
    let id = req.params.id
    try {
        await knex('works').where('id', id).del();
        res.status(200).end();
    } catch (error) {
        next(error);
    }
});

router.get('/works/update:id', async function (req, res, next) {
    try {
        let id = req.params.id;
        const [result] = await knex.select("*").from("works")
        .where({'id': id});
        req.status = 201;
        res.render('private/worksUpdete', {
            result
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
});

router.patch('/works/update:id', forms.single('file'), async function (req, res, next) {
    const id = req.params.id;
    let fileSrc = '/images/' + req.file.filename;
    await knex('works').where('id', id).update({
        imgSrc: fileSrc
    });
    res.end();
});

module.exports = router;