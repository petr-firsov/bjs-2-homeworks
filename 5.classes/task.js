//Задание 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(state) {
        if (state < 0) {
        this._state = 0;
        } else if (state > 100) {
        this._state = 100;
        } else {
        this._state = state;    
        } 
    }

    get state() {
        return this._state;
    };

}


let tenLittleNegroes = new PrintEditionItem(
    'Десять негритят', 
    1969, 
    128
);




class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'novel';
    }
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'detective';
    }
}




// Задание 2

class Library {
    constructor (name, books = []) {
        this.name = name;
        this.books = books;
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const foundBook = this.books.find(book =>  book[type] === value);

        if (!foundBook) {  
            return null;
        } 
            return foundBook;
        }
    

    giveBookByName(bookName) {
        const foundBook = (this.books.find(book => book.name === bookName));

        if (!foundBook) {
            return null;
        }
            let i = this.books.findIndex(book => book === bookName);
            let removed = this.books.splice(i, 1);
            return removed[0];
    }
}



// let Leninka = new Library('Ленинка');

// Leninka.addBook(new Magazine('Cosmopolitan', 1989, 126, 40));
// Leninka.addBook(new DetectiveBook('Конан Дойл', 'Шерлок Холмс', 1901, 100, 70));
// Leninka.addBook(new NovelBook('Замятин', 'Мы', 1919, 381, 64));

// Leninka.findBookBy('releaseDate', 1919);

// Leninka.giveBookByName('Мы');
// Leninka.NovelBook.state(24);
// Leninka.NovelBook.fix();
// Leninka.addBook('Мы');