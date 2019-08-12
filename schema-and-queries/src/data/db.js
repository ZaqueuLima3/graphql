const usuarios = [
  {
    id: 1,
    perfil_id: 1,
    nome: 'Zaqueu',
    email: 'zaqueu@gmail.com',
    idade: 23,
    status: 'ATIVO'
  },
  {
    id: 2,
    perfil_id: 2,
    nome: 'Thaisa',
    email: 'thaisa@gmail.com',
    idade: 20,
    status: 'INATIVO'
  },
  {
    id: 3,
    perfil_id: 1,
    nome: 'Sabota',
    email: 'sabota@gmail.com',
    idade: 5,
    status: 'BLOQUEADO'
  },
];

const perfis = [
  { id: 1, nome: 'Comum' },
  { id: 2, nome: 'Administrador' },
];

module.exports = { usuarios, perfis };