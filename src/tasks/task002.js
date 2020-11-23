const data = require('../../funcionarios.json');

const funcionarioMaior = data.funcionarios
    .reduce((acc, funcionario) => acc.salario < funcionario.salario ? funcionario : acc);

const funcionariosMaiores = data.funcionarios
    .filter(funcionario => funcionario.salario === funcionarioMaior.salario);


const funcionarioMenor = data.funcionarios
    .reduce((acc, funcionario) => acc.salario > funcionario.salario ? funcionario : acc);

const funcionariosMenores = data.funcionarios
    .filter(funcionario => funcionario.salario === funcionarioMenor.salario);


const mediaSalarial = [].concat(
    data.funcionarios
    .reduce((acc, funcionario) => ({
        ...acc,
        salario: acc.salario += funcionario.salario
    }))
).map(acc => ({
    total: acc.salario,
    media: Math.round(acc.salario / data.funcionarios.length)
}))[0];



funcionariosMenores.forEach(funcionario => {
    console.log(`global_min | ${funcionario.nome} ${funcionario.sobrenome} | ${funcionario.salario}`);
});

funcionariosMaiores.forEach(funcionario => {
    console.log(`global_max | ${funcionario.nome} ${funcionario.sobrenome} | ${funcionario.salario}`);
});

console.log('média salarial', mediaSalarial.media);