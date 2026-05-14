function abrirModal(nome, preco, imagem){

  document
    .getElementById("modal")
    .style.display = "flex"

  document
    .getElementById("modalNome")
    .innerText = nome

  document
    .getElementById("modalPreco")
    .innerText = preco

  document
    .getElementById("modalImg")
    .src = imagem
}

function fecharModal(){

  document
    .getElementById("modal")
    .style.display = "none"
}

/* FECHAR CLICANDO FORA */

window.onclick = function(e){

  let modal =
    document.getElementById("modal")

  if(e.target == modal){

    modal.style.display = "none"
  }
}