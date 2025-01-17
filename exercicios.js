// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = prompt("qual a altura do retangulo")
  let largura = prompt("qual a largura do retangulo")

  const resultado = altura * largura
  console.log (resultado)
}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = prompt("em que ano estamos?")
  let anoNascimento =  prompt("em qual ano você nasceu?")

  const resultado = anoAtual - anoNascimento
  console.log(resultado)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let pesoKg = peso
  let alturaM = altura
  let resultado = pesoKg / (alturaM * alturaM)
  return resultado  
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Digite seu nome")
  let idade = prompt("Digite sua idade")
  let email = prompt("Escreva seu e-mail")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt("Digite sua primeira cor favorita")
  let cor2 = prompt("Digite sua segunda cor favorita")
  let cor3 = prompt("Digite sua terceira cor favorita")
  let cores = [cor1, cor2, cor3]

  console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  let stringMini = string
  return stringMini.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let custoTeatro = custo
  let valorIngress = valorIngresso
  return custoTeatro / valorIngress 

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let tamanho1 = string1.length
  let tamanho2 = string2.length
  return tamanho1 === tamanho2

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  let elementUm = array [0]
  return elementUm

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  let elementUlt = array.pop()
  return elementUlt

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let primeiroElement = array.shift()
  let ultElement = array.pop()
  let ultViraPrimeiro = array.unshift(ultElement)
  let primeiroViraUlt = array.push(primeiroElement)
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let stringUm = string1.toLowerCase()
  let stringDs = string2.toLowerCase()
  return stringUm === stringDs

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = prompt("Qual ano atual?")
  let anoDeNascimento = prompt("Qual seu ano de nascimento?")
  let anoEmissaoRg = prompt("Qual ano de emissão do RG")
  let idade = anoAtual - anoDeNascimento
  let idadeRg = anoAtual - anoEmissaoRg
  let cond1 = (idade <= 20) && (idadeRg >= 5)
  let cond2 = (idade <= 50) && (idadeRg >= 10)
  let cond3 = (idade > 50) && (idadeRg > 15)

  console.log(cond1 || cond2 || cond3)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const dividePor4 = (ano % 4)
  const dividePor100 = (ano % 100)
  const dividePor400 = (ano % 400)
  return (dividePor4 === 0) && (dividePor100 !== 0) || (dividePor400 === 0)

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let idade = prompt('Você tem mais de 18 anos? (Resposta "sim" ou "não")')
  let nivelEnsino = prompt('Você possui ensino médio completo? (Resposta "sim" ou "não")')
  let disponibilidadeHora = prompt('Você possui disponibilidade exclusiva durante os horários do curso? (Resposta "sim" ou "não")')
  const respostaIdade = "sim"
  const respostaEnsino = "sim"
  const respostaDisponibilidadeHora = "sim"
  console.log((idade === respostaIdade) && (nivelEnsino === respostaEnsino) && (disponibilidadeHora === respostaDisponibilidadeHora))

}