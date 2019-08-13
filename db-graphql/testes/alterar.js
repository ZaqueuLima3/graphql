const db = require('../config/db');

const novoUsuario = {
  nome: 'Pedro',
  email: 'p@p.com',
  senha: '12345678'
}

// db('...').where({...}).update({...})

async function update() {
  // count
  const { qtde } = await db('usuarios')
    .count('* as qtde').first()

  // inserir (se a tabela estiver vazia)
  if (qtde == 0) {
    await db('usuarios').insert(novoUsuario)
    console.log('ola')
  }

  // consultar
  let { id } = await db('usuarios').select('id').limit(1).first()

  // alterar
  await db('usuarios').where({ id }).update({ nome: 'pedro grarcia'})

  return await db('usuarios').where({ id })
}

update()
  .then(usuario => console.log(usuario))
  .finally(() => db.destroy())