const container = document.querySelector(".container_card");

const todos = document.querySelector(".todos");

const horti = document.querySelector(".horti");

const pani = document.querySelector(".pani");

const lati = document.querySelector(".lati");

const containerValor = document.querySelector(".valor");

const soma = {
    valorTotal: 0
}

function percorrerMap(array) {
    
    array.map((produto, i) => {
    
        let card = document.createElement("li");
    
        let img = document.createElement("img");
    
        let productName = document.createElement("h3");
    
        let productSection = document.createElement("span");
    
        let productPrice = document.createElement("p");

    
    
        img.src = produto.img;  
        productName.innerText = produto.nome;
        productPrice.innerText = `R$${produto.preco}`;
        productSection.innerText = produto.secao;
    
        card.appendChild(img);
        card.appendChild(productName);
        card.appendChild(productSection);
        card.appendChild(productPrice);
    
        container.appendChild(card);
    })
}
percorrerMap(produtos);

function percorrerMapPreco(array) {

    containerValor.innerHTML = '';
    soma.valorTotal = 0;

    array.map((produto, i) => {
    soma.valorTotal += produto.preco
    })
    soma.valorTotal.innerText = soma.valorTotal;
    containerValor.append(`R$ ${soma.valorTotal}`);
    
}
percorrerMapPreco(produtos);


todos.addEventListener("click", event => {

 container.innerHTML = '';

 percorrerMap(produtos);
 percorrerMapPreco(produtos);

});

horti.addEventListener("click", event => {
    
    container.innerHTML = '';
    
    const arrayHortifruti = [];

    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].secao === 'Hortifruti'){
            arrayHortifruti.push(produtos[i]);
        }
    }

    percorrerMap(arrayHortifruti);
    percorrerMapPreco(arrayHortifruti);
});

pani.addEventListener("click", event => {

    container.innerHTML = '';

    const arrayPanificadora = [];

    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].secao === "Panificadora"){
            arrayPanificadora.push(produtos[i]);
        }
    }

    percorrerMap(arrayPanificadora);
    percorrerMapPreco(arrayPanificadora);
});

lati.addEventListener("click", event => {

    container.innerHTML = '';

    const arrayLaticinios = [];

    for (let i = 0; i < produtos.length; i++){
        if (produtos[i].secao === 'Laticínio'){
            arrayLaticinios.push(produtos[i])
        }
    }
    percorrerMap(arrayLaticinios);
    percorrerMapPreco(arrayLaticinios);
})

function filterCards(event){

    container.innerHTML = '';
    soma.valorTotal = 0;

    const buttonPesquisa = document.querySelector('.button-pes');
    const inputPesquisa= document.querySelector('.input-pesquisa');

    const valueInput = inputPesquisa.value.toLowerCase();

    const produtosFiltrados = [];
    
    event.preventDefault();
    for (let i = 0; i < produtos.length; i++){
        if(produtos[i].nome.toLowerCase().includes(valueInput)){
            produtosFiltrados.push(produtos[i]);
        }
    }
    percorrerMap(produtosFiltrados);
    percorrerMapPreco(produtosFiltrados);
}

function eventoPesquisa() {

    const buttonPesquisa = document.querySelector('.button-pes');
    const inputPesquisa = document.querySelector('.input-pesquisa');

    buttonPesquisa.addEventListener('click',filterCards);
    inputPesquisa.addEventListener('input',filterCards);
}
eventoPesquisa();