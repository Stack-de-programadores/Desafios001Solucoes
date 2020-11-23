const data = require('./../../funcionarios.json');
const {Map} = require('immutable');

let mapAreas = Map([]);

const getMaioresPorArea = (codigo) => {
    const funcionarioMaior = mapAreas
        .get(codigo)
        .reduce((acc, funcionario) => acc.salario < funcionario.salario ? funcionario : acc);

    return mapAreas
        .get(codigo)
        .filter(funcionario => funcionario.salario === funcionarioMaior.salario);
};

const getMenoresPorArea = (codigo) => {
    const funcionarioMenor = mapAreas
        .get(codigo)
        .reduce((acc, funcionario) => acc.salario > funcionario.salario ? funcionario : acc);

    return mapAreas
        .get(codigo)
        .filter(funcionario => funcionario.salario === funcionarioMenor.salario);
};

const getMediaSalarial = (codigo) => {
    const funcionarioReduce = mapAreas
        .get(codigo)
        .reduce((acc, funcionario) => ({
            ...acc,
            salario: acc.salario += funcionario.salario
        }));

    return Math.round(funcionarioReduce.salario / mapAreas.get(codigo).length);
}

data.areas.forEach((area) => {
    const funcionariosArea = data.funcionarios.filter(funcionario => funcionario.area === area.codigo);    
    mapAreas = mapAreas.set(area.codigo, funcionariosArea);
    
    getMenoresPorArea(area.codigo).forEach((funcionario) => {
        console.log(`global_min | ${area.nome} | ${funcionario.nome} ${funcionario.sobrenome} | ${funcionario.salario}`)
    })

    getMaioresPorArea(area.codigo).forEach((funcionario) => {
        console.log(`global_max | ${area.nome} | ${funcionario.nome} ${funcionario.sobrenome} | ${funcionario.salario}`)    
    })

    console.log(`media salarial de ${area.nome} é ${getMediaSalarial(area.codigo)}`);
    console.log('');
});
