module.exports = {
  precoComDesconto: (produto) => {
    if (!produto.desconto) return produto.preco;

    return (
      produto.preco * (1 - produto.desconto)
    ).toFixed(2)
  }, 
}