const { perfis } = require('../data/db');

module.exports = {
  salario(usuario) {
    return usuario.salario_real
  },

  perfil(usuario) {
    return perfis.filter(perfil => 
      perfil.id === usuario.perfil_id
    )[0] || null
  }
}