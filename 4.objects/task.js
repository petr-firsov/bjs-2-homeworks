// Задание 1

function Student(name, gender, age, marks = []) {
   this.name = name;
   this.gender = gender;
   this.age = age; 
   this.marks = marks;
}

new Student('Oleg', 'male', 29); 

new Student('Maria', 'female', 22);

new Student('Alevtina', 'female', 19)



// Задание 2

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}


// Задание 3

Student.prototype.addMarks = function (...marksToAdd) {
    if (this.hasOwnProperty('marks') === true) {
      this.marks.push(...marksToAdd);
    }
}


//  Задание 4

Student.prototype.getAverage = function (...marksToAdd) {
    if ((this.hasOwnProperty('marks') === true) && (marksToAdd.length !== 0)) {
        let sum = 0;
        marksToAdd.forEach((number) => {
        sum += number;
        })  
        return sum / marksToAdd.length; 
    } else { 
        return 0;
    }
}   



// Задание 5

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
