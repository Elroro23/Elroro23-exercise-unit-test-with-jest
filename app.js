const sum = (a, b) => {
    return a + b
}
console.log(sum(7, 3));
module.exports = { sum };

// Declaración de la tasa de conversión
let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07, // dólar estadounidense
    "GBP": 0.87, // libra esterlina
}


const fromEuroToDollar = function (valueInEuro) { //Declaramos una función con el nombre exacto "formEuroToDollar".
    let valueInDollar = valueInEuro * 1.07; //Convertimos el valor a dólares
    return valueInDollar; //Retornamos el valor en $
}
//Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar };

const fromDollarToYen = function (valueInDollar) { //Definimos una función para obtener la conversión de $ a yenes.
    let valueInEuro = valueInDollar / oneEuroIs.USD; //Dividimos el valor en $ por la conversión de 1euro a $(1,07).
    let valueInYen = valueInEuro * oneEuroIs.JPY; //El resultado de esa división lo multiplicamos por la conversión de 1euro a yenes(156.5).
    return valueInYen; //Retornamos el valor de esa operación
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen}; //Exportamos nuestras funciones para utilizarlas en otro código.

const fromYenToPound = function (valueInYen) {
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    return valueInPound;
};
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};