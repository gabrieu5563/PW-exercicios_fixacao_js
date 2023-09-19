// Crie novas funções para responder os diferentes exercícios conforme se pede
function example(){
   //Função de exemplo. Para a executar abra o arquivo index.html e no seu navegador chame o nome dessa função ( example() ) e dê enter para a executar.
   //Essa é uma função de exemplo que usa cria um novo Objeto Date() do javascript para mostrar a data atual no formato ISO.
   let Data = new Date()
   alert("Você executou a função example.")
   console.log("Essa função foi executada em: " + Data.toISOString())
}

function parameterExample(n1, n2){
   //Função de exemplo. Para a executar abra o arquivo index.html e no seu navegador chame o nome dessa função ( example() ) e dê enter para a executar.
   //Essa é uma função de exemplo que têm 2 valores como parâmetros, n1 e n2. 
   alert("Você executou a função parameter Example")
   console.log(n1 + n2)
}

//Exercicios

//Exercicio1 

function olamundo(){
   alert("Olá mundo")
}

function mostranome(){
   let nome = prompt("Digite seu nome:   ")
   console.log(nome)
}

function concatenapalavras(){
   let palavra1 = prompt("Digite a primeira palavra: ")
   let palavra2 = prompt("Digite a segunda palavra: ")
   let concatena = palavra1 + palavra2
   console.log(concatena)
}

//Exercicio 2

function somanumeros(){
   let n1 = parseInt(prompt("Digite o primeiro número: "))
   let n2 = parseInt(prompt("Digite o segundo número: "))
   let result = n1 + n2
   console.log(result)
}

function subtraiNumeros(){
   let n1 = parseInt(document.getElementById("sub1").value)
   let n2 = parseInt(document.getElementById("sub2").value)
   result = n1 - n2
   console.log(result)
}

function criaobjeto(){
   let objeto = {
      nome_obj: prompt("Digite seu nome: "),
      idade_obj: prompt("Digite sua idade: "),
      time_obj: prompt("Digite seu time favorito: ")
   }
   console.log(objeto)
}

//Exercicio 3

function calculadora(){
   let operacao = prompt("Digite qual operação deseja executar (sem acentuação):")
   let n1 = parseInt(prompt("Digite o primeiro número: "))
   let n2 = parseInt(prompt("Digite o segundo número: "))
   let result
   if(operacao == "soma"){
      result = n1 + n2
   } else {
      if(operacao == "subtracao"){
         result = n1 - n2
      } else {
         if(operacao == "multiplicacao"){
            result = n1 * n2
         } else {
            if(operacao == "divisao"){
               result = n1 / n2
            }
         }
      }
   }
   console.log(result)
}

function mudaconstante(){
   const nome = prompt("Digite seu nome: ")
   console.log(nome)
   console.log("Não é possível alterar o valor atribuído a uma constante.")
}

//Exercicio 4

function manipulaarray(){
   let cores = ["branco", "azul", "vermelho", "verde", "preto", "amarelo", "marrom", "violeta", "rosa", "ciano", "magenta", "cinza"]
   console.log(cores)
   cores.push("laranja")
   console.log(cores)
   cores.pop()
   console.log(cores)
   cores.sort()
   console.log(cores)
   cores.splice(1, 1)
   console.log(cores)
   let length = cores.length -1
   console.log(cores[0])
   console.log(cores[length])
   cores.unshift("fucsia")
   console.log(cores)
   cores.shift()
   console.log(cores)
}