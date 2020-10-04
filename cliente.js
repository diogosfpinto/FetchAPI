const informacoesClientes = [
    {
        cpf: 00765343088,
        nome: "Ronaldo"
    },
    {
        cpf: 00765343088,
        nome: "Monica"
    }
];

 

const corpoTabela = document.querySelector("[data-conteudo-tabela]");

console.log(corpoTabela);



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