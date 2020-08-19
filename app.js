//Carregando modulos
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
const admin = require('./routes/admin');
//const mongoose = require('mongoose');

//Configuraçoes
    //Body-Parser
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());
    //HandleBars
        app.engine('handlebars', handlebars({defaultLayout : 'main'}));
        app.set('view engine', 'handlebars');
    //Mongoose

//Rotas

    app.use('/admin', admin);



//Outros
const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server Running....');
});