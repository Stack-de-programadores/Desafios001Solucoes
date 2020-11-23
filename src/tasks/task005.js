const data = require('./../../funcionarios.json');
const lodash = require('lodash');
const {Map} = require('immutable');

let funcionariosMap = Map([]);
let funcionarios = data.funcionarios;

const sobreNomes = funcionarios
    .map(funcionario => funcionario.sobrenome);

const sobreNomesClean = lodash
    .union(sobreNomes, 'sobrenome');


sobreNomesClean.forEach(sobreNome => {
    const funcionariosSobrenome = funcionarios.filter(obj => obj.sobrenome == sobreNome);
    const maior = funcionariosSobrenome.reduce((acc, obj) => acc.salario > obj.salario ? acc : obj);
    const maiores = funcionariosSobrenome.filter(obj => obj.salario === maior.salario);

    funcionariosMap = funcionariosMap.set(
        sobreNome,
        maiores
    );
});


sobreNomesClean.forEach(sobrenome => {
    funcionariosMap.get(sobrenome).forEach(funcionario => {
        console.log(`global_max | ${sobrenome} | ${funcionario.salario}`);
    });
})