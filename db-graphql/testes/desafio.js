const db = require('../config/db');

async function salvarUsuario(nome, email, senha) {
  const novoUsuario = {
    nome,
    email,
    senha
  }

  const usuarioExiste = await db('usuarios')
    .where({ email })
    .select('*')
    .limit(1)
    .first()

  if (usuarioExiste) {
    await db('usuarios').where({ email }).update(novoUsuario);
  } else {
    await db('usuarios').insert(novoUsuario);
  }

  return await db('usuarios')
    .where({ email }).first()
}

async function salvarPerfil(nome, rotulo) {
  const novoPerfil = {
    nome,
    rotulo
  }

  const perfilExiste = await db('perfis').where({ nome }).first()

  if (perfilExiste) {
    await db('perfis').where({ nome }).update(novoPerfil)
  } else {
    await db('perfis').insert(novoPerfil);
  }

  return await db('perfis').where({ nome }).first()
}

async function adicionarPerfis(usuario, ...perfis) {
  for (perfil of perfis) {   
    const novaRelacao = {
      usuario_id: usuario.id,
      perfil_id: perfil.id
    }

    const relacaoExiste = await db('usuarios_perfis')
      .where(novaRelacao).select('*').limit(1).first()

    if (relacaoExiste) continue;

    await db('usuarios_perfis').insert(novaRelacao)
  }
}

async function executar() {
  const usuario = await salvarUsuario('Ana5', 'ana5@gmail.com', '123456')
  const perfilA = await salvarPerfil('admin', 'Administrador')
  const perfilB = await salvarPerfil('moderador', 'Moderador')

  // console.log(usuario)
  // console.log(perfilA)
  // console.log(perfilB)

  await adicionarPerfis(usuario, perfilA, perfilB)
}

executar()
  .catch(err => console.log(err))
  .finally(() => db.destroy())
