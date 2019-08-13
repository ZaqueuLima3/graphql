const db = require('../config/db');

// db('perfis')
//   .map(p => p.nome)
//   .then(nomes => console.log(nomes))
//   .finally(() => db.destroy());

// db('perfis').select('nome', 'id')
//   .then(res => console.log(res))
//   .finally(() => db.destroy())

// db.select('nome', 'id')
//   .from('perfis')
//   .limit(4).offset(0)
//   .map(res => ({ ...res, novocampo:'ADICIONADO' }))
//   .then(res => console.log(res))
//   .finally(() => db.destroy())

db('perfis')
  .where({ id: 2 })
  .first()
  .then(res => console.log(res))
  .finally(() => db.destroy())