function Soma (numOne, numTwo) {
  return numOne + numTwo
}

console.log('O valor da soma é ' + Soma(10, 90))

function ValidaNome (name) {
  if (name.leght > 10){
    return "És Bahia?"
  } else if (name.leght > 5){
    return "Nome valido"
  } else{
    return "Nome invalido"
  }
}

function addUser (name) {
  if (typeof(name) === "string"){
    return `Sr(a) ${name}`
  } else{
    return `Insira um nome valido`
  }
}

function Aprovacao (media) {
  return ((typeof(media) === "number") && (media > 7 ? "Aprovado":"Reprovado"))
}

console.log(addUser("Pedro"))
console.log(Aprovacao(10))