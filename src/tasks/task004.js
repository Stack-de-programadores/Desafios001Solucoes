const data = require('./../../funcionarios.json');

const areasProcessadas = data.areas.map((area) => ({
    ...area,
    numeroDeFuncionarios: data.funcionarios
        .filter(funcionario => funcionario.area === area.codigo)
        .length
}));

const menorArea = areasProcessadas.reduce((acc, area) => acc.numeroDeFuncionarios < area.numeroDeFuncionarios ? acc : area);
const menoresAreas = areasProcessadas.filter(area => area.numeroDeFuncionarios === menorArea.numeroDeFuncionarios);

const maiorArea = areasProcessadas.reduce((acc, area) => acc.numeroDeFuncionarios > area.numeroDeFuncionarios ? acc : area);
const maioresAreas = areasProcessadas.filter(area => area.numeroDeFuncionarios === maiorArea.numeroDeFuncionarios);


menoresAreas.forEach(area => {
    console.log(`global_min | ${area.nome} | ${area.numeroDeFuncionarios}`);
});

maioresAreas.forEach(area => {
    console.log(`global_max | ${area.nome} | ${area.numeroDeFuncionarios}`);
})