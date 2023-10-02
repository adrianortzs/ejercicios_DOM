var valoresLista = ["comprar", "barrer", "alimentar gato", "colada"];
const milista = document.querySelector("ul");
for (let i = 0; i < valoresLista.length; i++) {
    let li = document.createElement('li');
    milista.appendChild(li);
    let node = document.createTextNode(valoresLista[i]);
    li.appendChild(node);
}