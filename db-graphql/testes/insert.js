const db = require('../config/db');

// const novoPerfil = {
//   nome: 'visitante',
//   rotulo: 'Visitante'
// }

// db('perfis').insert(novoPerfil)
//   .then(res => console.log(res))
//   .catch(err => console.log('ERRO: ', err.message))
//   .finally(() => db.destroy())

const perfilSU = {
  nome: 'root' + Math.random(),
  rotulo: 'Super Usuário'
}

db.insert(perfilSU).into('perfis')
  .then(res => res[0])
  .then(id => console.log(id))
  .catch(err => console.log('ERRO: ', err.message))
  .finally(() => db.destroy())