let totalCarrinho = 0 ;
document.getElementById("lista-produtos").innerHTML = "";
document.getElementById("valor-total").innerHTML = "R$ 0";


function adicionar(){
    let produtoSelecionado = document.getElementById("produto").value;
    let quantidade = document.getElementById("quantidade").value;
    let nomeDoProduto = produtoSelecionado.split ("-")[0];
    let valorDoProduto = produtoSelecionado.split("R$")[1];
    let valorReferenteAQuantidade = quantidade * valorDoProduto;
    document.getElementById("quantidade").value = ""
    
    //mostrando no carrinho
    let adicionadosNoCarrinho = document.getElementById("lista-produtos");
    adicionadosNoCarrinho.innerHTML = adicionadosNoCarrinho.innerHTML + `
         <section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${nomeDoProduto} 
            <span class="texto-azul">R$ ${valorReferenteAQuantidade}</span>
         </section>`;

    // realizando soma e exibindo valor total

    let carrinho = document.getElementById("valor-total");
    totalCarrinho = totalCarrinho + valorReferenteAQuantidade;
    carrinho.textContent = `R$ ${totalCarrinho}`;
    

    //verificando quantidade e produto
 
    }

    function limpar() {
      document.getElementById("lista-produtos").innerHTML = "";
      document.getElementById("valor-total").innerHTML = "R$ 0";
      totalCarrinho = 0
      document.getElementById("quantidade").value = ""


    }



