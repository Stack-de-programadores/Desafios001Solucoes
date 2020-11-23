console.log('funcionando');

const usuarios = [
    {
        nome: 'wesley',
        sobrenome: 'borges'
    },
    {
        nome: 'erick',
        sobrenome: 'bruno'
    }
];

const usuariosFind = usuarios.filter((usuario) => usuario.nome === 'wesley').sobrenome;
console.log(usuariosFind);