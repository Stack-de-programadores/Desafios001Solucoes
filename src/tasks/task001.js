const data = require('../../funcionarios.json');

const areas = data.areas;

const funcionariosMapeados = data.funcionarios.map((funcionario) => ({
    ...funcionario,
    nomeCompleto: `${funcionario.nome} ${funcionario.sobrenome}`,
    areaNome: areas.find(area => area.codigo === funcionario.area).nome
}))

console.log(funcionariosMapeados);