let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07, // dólar estadounidense
    "GBP": 0.87, // libra esterlina
}
const { sum, fromEuroToDollar } = require('./app.js');
test('adds 10 + 5 to equal 15', () => {
    let total = sum(10, 5);
    expect(total).toBe(15);
});
test("One euro should be 1.07 dollars", function () {
    const { fromEuroToDollar } = require('./app.js'); // Importo la funcion desde app.js
    const dollars = fromEuroToDollar(3.5);            // Uso la función como debe ser usada
    const expected = 3.5 * 1.07;                      // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745);       // 1 euro son 1.07$, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});
test("One dollar should be 146 yen", function () {   //Coloco el titulo(condición) a mi test.
    const { fromDollarToYen } = require('./app.js'); //Importo la función desde app.js
    const yen = fromDollarToYen(1);
    const expected = (1 / oneEuroIs.USD) * oneEuroIs.JPY;
    expect(fromDollarToYen(1)).toBeCloseTo(expected, 2);        //Definimos lo que queremos probar.
});
test("1000 yen should be 5.56 pounds", function () {
    const { fromYenToPound } = require('./app.js');
    const pound = fromYenToPound(1000);
    const expected = (1000 / oneEuroIs.JPY) * oneEuroIs.GBP;
    expect(fromYenToPound(1000)).toBeCloseTo(expected, 2); //Usamos toBeCloseTo para manejar decimales y 2 para los decimales que queremos.
});