//Carregando modulos
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const admin = require('./routes/admin');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash')

//Configuraçoes
    //Sessao
        app.use(session({
            secret: "cursodenode",
            resave: true,
            saveUninitialized: true
        }));
        app.use(flash());
    //Middleware
        app.use((req, res, next) => {
            res.locals.success_msg = req.flash("success_msg");
            res.locals.error_msg = req.flash('error_msg');
            next();
        })
    //Body-Parser
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());
    //HandleBars
    app.engine(
        'handlebars', handlebars({extname: "handlebars",defaultLayout: "main",layoutsDir: "views/layout", }));
        app.set('view engine', 'handlebars');
    //Mongoose
        mongoose.Promise = global.Promise;
        mongoose.connect('mongodb://localhost/blogapp').then(() => {
            console.log('Conectado ao MongoDB...');
        }).catch((err) => {
            console.log('Erro ao Conectar ao MongoDB: ' + err);
        });
    //Public
        app.use(express.static(path.join(__dirname, 'public')));
//Rotas

    app.use('/admin', admin);



//Outros
const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server Running....');
});