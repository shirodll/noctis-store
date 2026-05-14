const estoque = {
  cristal: 7,
  nitro: 3
};

function init(){
  for(let i in estoque){
    if(!localStorage.getItem(i)){
      localStorage.setItem(i, estoque[i]);
    }
    update(i);
  }
}

/* ESTOQUE */
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
  document.getElementById("modal").classList.add("active");
  document.getElementById("nomeModal").innerText = nome;
  document.getElementById("precoModal").innerText = preco;
  document.getElementById("imgModal").src = img;
}

function fecharCompra(){
  document.getElementById("modal").classList.remove("active");
}

/* POPUPS MENU */
function abrirPagina(id){
  document.getElementById("overlay").classList.add("active");
  document.getElementById(id).classList.add("active");
}

function fecharPaginas(){
  document.getElementById("overlay").classList.remove("active");

  document.querySelectorAll(".popup").forEach(p=>{
    p.classList.remove("active");
  });

  fecharCompra();
}

/* clique fora */
window.onclick = function(e){
  if(e.target.classList.contains("overlay")){
    fecharPaginas();
  }
};

init();
