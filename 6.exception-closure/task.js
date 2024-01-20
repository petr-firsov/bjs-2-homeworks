// Задача 1


function parseCount(value) {
    try {
        Number.parseFloat(value) === NaN;
    } catch(error) {
        console.log(error);
        throw('Невалидное значение');
    } finally {
        return Number.parseFloat(value);
    }
}


function validateCount(value) {
    try {
        parseCount(value);
    } catch(error) {
        throw(error);
    } finally {
        return parseCount(value);
    }
}




// Задача 2

class Triangle {
    constructor(a, b, c) {
        try {
            if ((a + b < c) || (a + c <b) || (b + c < a) === true); 
        } catch (error) {
            console.log(error);
            console.log('Треугольник с такими сторонами не существует');
        }
    }

    get perimeter() {
        return a + b + c;
    }

    get area() {
        let p = 1/2 * (a + b + c);
        let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
        return s;
    }
}

function getTriangle() {
    try { 
        new Triangle;
        if (Triangle.constructor.catch === error);
    } catch {
        Triangle.perimeter();
        Triangle.area();
        throw('Ошибка! Треугольник не существует'); 
    }
}


   
