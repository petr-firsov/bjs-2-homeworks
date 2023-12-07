// Задание 1

function Student(name, gender, age) {
   this.name = name;
   this.gender = gender;
   this.age = age; 
}

Student.prototype.marks = [];

new Student('Oleg', 'male', 29); 

new Student('Maria', 'female', 22);

new Student('Alevtina', 'female', 19)



// Задание 2

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}


// Задание 3

Student.prototype.addMarks = function (...marksToAdd) {
    if (Student.hasOwnProperty('marks') === true) {
    this.marks = args;
    }
}


//  Задание 4

Student.prototype.getAverage = function (...marksToAdd) {
    if (Student.hasOwnProperty('marks') === true) {
        let sum = 0;
        let length = marksToAdd.length;
        marksToAdd.forEach(function(number) {
        sum += number;
        return sum / length; 
    }) } else return 0;
}



// Задание 5

Student.prototype.exclude = function (reason) {
    
}
