const { usuarios, perfis } = require('../data/db');

module.exports = {
  ola: () => "Bom dia",
  horaAtual: () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());

    function formatTime(time) {
      const timeFotmatted = String(time).length === 1 
        ? `0${time}` 
        : time;

        return timeFotmatted;
    }

    const dateFormatted = `${hours}:${minutes}:${seconds}`;

    return new Date();
  },
  usuarioLogado: () => ({
    id: 1,
    nome: 'Zaqueu',
    email: 'zaquulima1@gmail.com',
    salario_real: 1788.55,
    idade: 23,
    vip: true
  }),
  produtoEmDestaque: () => ({
    nome: 'Notebook samsung i5',
    preco: 4890.89,
    desconto: 0.5
  }),
  numerosMegaSena: () => {
    const crescente = (a, b) => a - b;
    const gerarNum = () => parseInt(Math.random() * 60 + 1);

    const arr = Array(6)
      .fill(0)
      .map(() => gerarNum())
      .sort(crescente)

    return arr.map((num, indice, array) => {
      if (num === array[indice-1]) {
        const newNum = gerarNum();

        if (array.filter(n => n === newNum)) {
          return gerarNum();
        }
      }

      return num
      }).sort(crescente);

  },
  usuarios: () => usuarios,
  usuario: (_, { id }) => {
    const sels = usuarios
      .filter(usuario => 
        usuario.id === parseInt(id)
      );
    
    return sels ? sels[0] : null ;
  },
  perfis: () => perfis,
  perfil(_, { id }) {
    const perfil = perfis.filter(p => p.id === parseInt(id));

    return perfil ? perfil[0] : null;
  },
};
