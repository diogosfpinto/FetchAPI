function validarCPF(cpf) {

    //Colocando os digitos do cpf em um array
    let digitos = [];
    for (let indice = 0; indice < cpf.length; indice++) {
        digitos[indice] = cpf.substring(indice, indice + 1)
    }
    console.log(digitos);

    //Comparando os itens do array

    let validacao = true;

    for (let indice = 0; indice < digitos.length - 1; indice++){
        
        if(digitos[indice] == digitos[indice + 1] && validacao == true) {
            validacao = true;
        } else {
            validacao = false;            
        }
    }
    return validacao;  
}