// Задача 1

function parseCount(value) {
    if (isNaN(Number.parseFloat(value))) {
        throw new Error('Невалидное значение');
    } else {
        return Number.parseFloat(value);
    }
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch(error) {
        throw new Error;
    }
}



// Задача 2

class Triangle {
    constructor(a, b, c) {
        if ((a + b < c) || (a + c < b) || (b + c < a) === false) {
            this.a = a;
            this.b = b;
            this.c = c;
        } else {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    get perimeter() {
        if ((this.a + this.b < this.c) || (this.a + this.c < this.b) || (this.b + this.c < this.a) === false) {
            return this.a + this.b + this.c;
        } else {
            return 'Ошибка! Треугольник не существует';
        }
    }

    get area() {
        if ((this.a + this.b < this.c) || (this.a + this.c < this.b) || (this.b + this.c < this.a) === false) {
            let p = 1/2 * (this.perimeter);
            let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
            s = Number(s.toFixed(3));
            return s;
        } else {
            return 'Ошибка! Треугольник не существует';
        }
    }
}

function getTriangle(a, b, c) {    
    try {
        return new Triangle(a, b, c);
    } catch(error) {
        return new Triangle(a, b, c);
    }
}


   
