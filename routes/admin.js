const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); 
require('../models/Categoria');
const Caterogia = mongoose.model('categorias');

router.get('/', (req, res) => {
    res.render("admin/index");
});

router.get('/posts', (req, res) => {
    res.send('Posts Page');
});

router.get('/categorias', (req, res) => {
    res.render("admin/categorias");
});

router.get('/categorias/add', (req, res) => {
    res.render('admin/adicionarCategoria');
});

router.post('/categorias/nova', (req, res) => {
    const novaCategoria = {
        nome: req.body.nome,
        slug: req.body.slug
    }

    new Caterogia(novaCategoria).save().then(() => {
        console.log('Categoria salva com sucesso');
    }).catch((err) => {
        console.log('Erro ao cadastrar nova categoria: ' + err);
    });
});

module.exports = router;