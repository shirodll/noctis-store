const estoque = {
  cristal: 7,
  nitro: 3
};

/* ESTOQUE */

function init(){
  for(let i in estoque){
    if(!localStorage.getItem(i)){
      localStorage.setItem(i, estoque[i]);
    }
    update(i);
  }
}

function update(id){
  let el = document.getElementById("estoque-" + id);
  let qtd = localStorage.getItem(id);

  if(el){
    el.innerText = `🔥 Estoque: ${qtd} restantes`;
  }
}

/* COMPRA */

function comprar(id,nome,preco,img){
  let qtd = parseInt(localStorage.getItem(id));

  if(qtd <= 0){
    alert("Sem estoque!");
    return;
  }

  qtd--;
  localStorage.setItem(id,qtd);

  update(id);

  abrirCompra(nome,preco,img);
}

/* MODAL COMPRA */

function abrirCompra(nome,preco,img){
  document.getElementById("modal").style.display="flex";
  document.getElementById("nomeModal").innerText=nome;
  document.getElementById("precoModal").innerText=preco;
  document.getElementById("imgModal").src=img;
}

function fecharCompra(){
  document.getElementById("modal").style.display="none";
}

/* POPUPS MENU */

function abrirPagina(id){
  document.getElementById("overlay").style.display="block";
  document.getElementById(id).style.display="block";
}

function fecharPaginas(){
  document.getElementById("overlay").style.display="none";

  document.querySelectorAll(".popup").forEach(p=>{
    p.style.display="none";
  });

  fecharCompra();
}

window.onclick = function(e){
  if(e.target.classList.contains("overlay")){
    fecharPaginas();
  }
};

init();
