const listaNumeros = [5, 23, 84, 102, 51, 41, 98, 34, 52, 75, 3, 501, 1024, 10000]
const listaImpares = []
const listaPares = []

for (let i = 0; i < listaNumeros.length; i++){
    let numero = listaNumeros [i]
    let restoDivision = numero % 2
    if(restoDivision == 0){
        listaPares.push(numero)
    }else {
        listaImpares.push (numero)
    }
}

console.log ("Los numeros impares son")
console.log (listaImpares)

console.log ("Los numeros pares son")
console.log (listaPares)
