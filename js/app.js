
let totalGeral;
limpar ();
//começar pelos botões adicionar e limpar: 
function adicionar() {

    //chamada quando a pessoa clica no botão, então precisamos recuperar os valores, nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    //Queremos separar o nome do produto do valor usando o hífen como delimitador.
    //Nesse caso, o hífen vai dividir a informação em duas partes. Temos uma informação antes do hífen e uma informação após o hífen. Queremos a informação antes, que é a primeira posição. Portanto, definiremos que é a posição zero.
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;


    //calcular o preço, o nosso subtotal por produto
    let preco = quantidade * valorUnitario;


    // adicionar no carrinho 
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul"> R$ ${preco}</span>
  </section>`;

    //atualizar o valor total de compras

    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;



}




function limpar() {

     totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = ' ';
    document.getElementById('valor-total').textContent = 'R$0';

}