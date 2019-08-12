const { perfis, perfilId } = require('../../data/db');

function findPerfilIndex(id) {
  return perfis.findIndex(p => p.id === id);
}

module.exports = {
  novoPerfil(_, { nome }) {
    const perfilExistente = perfis.some(p => p.nome === nome);

    if (perfilExistente) {
      throw new Error ('Perfil já cadastrado')
    };

    const perfil = {
      id: perfilId(),
      nome
    }

    perfis.push(perfil)

    return perfil;
  },

  excluirPerfil(_, { id }) {
    const i = findPerfilIndex(id);

    if (i < 0) return null;

    const perfil = perfis.splice(i, 1);

    return perfil[0] || null;
  },

  alterarPerfil(_, args) {
    const i = findPerfilIndex(args.id);

    if (i < 0) return null;

    const perfil = {
      ...perfis[i],
      ...args
    }

    perfis.splice(i, 1, perfil);

    return perfil;
  },
}