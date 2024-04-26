const express = require('express');
const app = express();
const {filtrarProfessores, encontrarProfessor} = require('./controladores/professores');

const primieroIntermediario = (req, res, next) => {
    console.log('Passei no primeiro intermediario');
    next();
}

const intermediarioDaRota = (req, res, next)=>{
    console.log('Passei no intermediario da rota');
    next();
}

//localhost:3000/professores
app.get('/professores', intermediarioDaRota, filtrarProfessores);

//localhost:3000/professores/3
app.get('/professores/:id', encontrarProfessor);

app.listen(3000);
