//Carregando modulos
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const admin = require('./routes/admin');
const path = require('path');
const { dirname } = require('path');

//const mongoose = require('mongoose');

//Configuraçoes
    //Body-Parser
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());
    //HandleBars
    app.engine(
        'handlebars', handlebars({extname: "handlebars",defaultLayout: "main",layoutsDir: "views/layout", }));
        app.set('view engine', 'handlebars');
    //Mongoose


    //Public
        app.use(express.static(path.join(__dirname, 'public')));
//Rotas

    app.use('/admin', admin);



//Outros
const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server Running....');
});