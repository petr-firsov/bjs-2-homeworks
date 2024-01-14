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
    let state = state * 1.5;
    }

    set writeState(state) {
        if (state < 0) {
        let state = 0;
        } else if (state > 100) {
        let state = 100;
        } else {
        let state = this.state;    
        } 
    }

    get readState() {
        return this.state;
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
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = 'book';
    }
}

class NovelBook extends Book{
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = 'novel';
    }
}

class FantasticBook extends Book{
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book{
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = 'detective';
    }
}
