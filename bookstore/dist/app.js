"use strict";
class Book {
    constructor(title, author, totalPages, publishDate) {
        this.title = title,
            this.author = author,
            this.totalPages = totalPages,
            this.publishDate = publishDate;
    }
    bookDetails() {
        return {
            bookTitle: this.title,
            bookAuthor: this.author,
            bookPages: this.totalPages,
            bookPublishedDate: this.publishDate,
        };
    }
}
class Person {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
}
class Librarien extends Person {
    constructor(name) {
        super(name, 'employee');
    }
    addBook(title, author, totalPages, publishDate) {
        const newBook = new Book(title, author, totalPages, publishDate);
        bookshelf.push(newBook.bookDetails());
    }
    needHelp() {
        console.log(this.role + ': Do you need help?');
    }
    showBooks(answer) {
        let counter = 0;
        if (answer === 'yes') {
            console.log(this.role + ': We have ' + bookshelf.length + ' books currently in the shelf. Do you want to have a look at the titles?');
            console.log(this.role + ': This is the list of our books.');
            bookshelf.forEach((entry) => {
                counter++;
                console.log(counter + ': ' + entry.bookTitle);
            });
        }
        console.log(this.role + ': Okay, just ask if you need something!');
    }
}
class Customer extends Person {
    constructor(name) {
        super(name, 'customer');
    }
    askForBooks() {
        console.log(this.role + ': Hello, what books do you have?');
    }
    rndAnswer() {
        const rndAnswer = Math.round(Math.random());
        if (rndAnswer === 1) {
            return 'yes';
        }
        return 'no';
    }
    giveAnswer(answer) {
        if (answer === 'yes') {
            console.log(this.role + ': Oh yes please!');
        }
        else {
            console.log(this.role + ': No thank you I am just looking');
        }
    }
}
const bookshelf = [];
const C1 = new Customer('Johanna');
const E1 = new Librarien('Timo');
let answer = '';
E1.addBook('Top 5 TS hacks', 'Themeus', 500, new Date(0));
E1.addBook('Top 10 TS hacks', 'Themeus', 300, new Date());
C1.askForBooks();
E1.needHelp();
answer = C1.rndAnswer();
C1.giveAnswer(answer);
E1.showBooks(answer);
