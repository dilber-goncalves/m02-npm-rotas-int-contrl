const professores = require('../banco-de-dados');

const filtrarProfessores = (req, res) => {
    let resultado = [];
    console.log('Cheguei no controlador de listagem do professor');
    if(req.query.stack){
        resultado = professores.filter((professor) => {
            return professor.stack === req.query.stack;
        })
    }
    res.send(resultado);
};

const encontrarProfessor = (req, res) => {
    const professorEncontrado = professores.find((professor) => {
        return professor.id === Number(req.params.id)
    });
    res.send(professorEncontrado);
};

module.exports = {filtrarProfessores, encontrarProfessor};