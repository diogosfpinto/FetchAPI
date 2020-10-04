fetch('http://localhost:4000/clientes')
.then(resposta => {
    return resposta.json()
})
.then( json => {
    return console.log(json);
})

const corpoTabela = document.querySelector("[data-conteudo-tabela]");


//Aero Function
const exibeCliente = (cpf, nome) => {
    //Criando a linha da tabela
    const linha = document.createElement('tr');

    const conteudoLinha = `
        <td>${cpf}</td>
        <td>${nome}</td>`   

    //Adicionando o conteudo a linha 
    linha.innerHTML = conteudoLinha;
    return linha;
}

informacoesClientes.forEach( indice => {
    corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome))
})