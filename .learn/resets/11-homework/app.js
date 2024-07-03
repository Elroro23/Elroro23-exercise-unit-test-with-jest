const sum = (a, b) => {
    return a + b
}
console.log(sum(7, 3));
module.exports = { sum };

//Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
    //Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    //Retornamos el valor en dólares
    return valueInDollar;
}
// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar };

const fromDollarToYen = function (valueInDollar){
    let valueInYen = valueInDollar * 156.5;
    return valueInYen;
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen};