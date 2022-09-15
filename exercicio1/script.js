const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

/*# Exercício 1

Crie duas funcões que recebem como parâmetro um objeto.
1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.*/

const caixaAlta = (objeto) => {
    for (item in objeto){
        objeto[item] = objeto[item].toUpperCase()

    }
    console.log(objeto)
}
caixaAlta(objeto)




//2. A segunda deve retornar os valores do objeto como texto corrido.

const oTxt = (objeto) => {
    let txtCorrido = ""
for (item in objeto){
    txtCorrido = `${item}: ${objeto[item]}`
    console.log(txtCorrido)
}
   //retaurn txtCorrido
}

  oTxt(objeto)



/*3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.*/

function obbjCall(objeto, function){
    console.log(function(objeto));
}

//Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
//obbjCall(objeto,obbjCall)

//Repita o processo para a funcão 2
//obbjCall(objeto,oTxt)
