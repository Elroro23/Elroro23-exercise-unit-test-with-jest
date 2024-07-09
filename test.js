let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07, // dólar estadounidense
    "GBP": 0.87, // libra esterlina
}
const { sum } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});
test("One euro should be 1.07 dollars", function () {
    const { fromEuroToDollar } = require('./app.js'); // Importo la funcion desde app.js
    const dollars = fromEuroToDollar(3.5);            // Uso la función como debe ser usada
    const expected = 3.5 * 1.07;                      // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected);       // 1 euro son 1.07$, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});
test("5 dollar should be 731 yen", function () {   //Coloco el titulo(condición) a mi test.
    const { fromDollarToYen } = require('./app.js'); //Importo la función desde app.js
    const yen = fromDollarToYen(5);
    const expected = (5 / 1.07) * 156.5;
    expect(yen).toBeCloseTo(expected);        //Definimos lo que queremos probar.
});
test("5 yen should be 0.02 pounds", function () {
    const { fromYenToPound } = require('./app.js');
    const pound = fromYenToPound(5);
    const expected = (5 / 156.5) * 0.87;
    expect(pound).toBeCloseTo(expected, 2); //Usamos toBeCloseTo para manejar decimales y 2 para los decimales que queremos.
});