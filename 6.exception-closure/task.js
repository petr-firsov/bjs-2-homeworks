// Задача 1

function parseCount(value) {
    let result = Number.parseFloat(value);
    if (isNaN(result)) {
        throw new Error('Невалидное значение');
    } else {
        return result;
    }
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch(error) {
        return error;
    }
}



// Задача 2

class Triangle {
    constructor(a, b, c) {
        if ((a + b < c) || (a + c < b) || (b + c < a) === true) {
            throw new Error('Треугольник с такими сторонами не существует');
        } else {
            this.a = a;
            this.b = b;
            this.c = c;
        }
    }

    get perimeter() {
        if (this.constructor === Error) {
            return 'Ошибка! Треугольник не существует';
        } else {
            return this.a + this.b + this.c;
        }
    }

    get area() {
        if (this.constructor === Error) {
            return 'Ошибка! Треугольник не существует';
        } else {
            let p = this.perimeter / 2;
            return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
        }
    }
}

function getTriangle(a, b, c) {    
    try {
        return new Triangle(a, b, c);
    } catch(error) {
        return Triangle.perimeter, Triangle.area;
    }
}


   
