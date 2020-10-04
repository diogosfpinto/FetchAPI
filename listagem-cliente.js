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

listarClientes().then( exibe => {
        exibe.forEach( indice => {
            corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome))
        })
    }    
)