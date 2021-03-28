// Book Class: represets a book
class Book {
    constructor(author, title) {
        this.author = author;
        this.title = title;
        return this;
    }
}
// UI class: UI functions and helpers
class UI {
    static loadBooks(storedBooks) {
        storedBooks.forEach(book => UI.createBookTile(book));
    }

    static createBookTile(book) {
        const container = document.querySelector('.book-container');
        const newDiv = document.createElement('div');
        newDiv.classList.add('book-tile');

        const titleHead = document.createElement('h3');
        titleHead.textContent = 'Title';
        const title = document.createElement('p');
        title.textContent = `${book.title}`;
        newDiv.appendChild(titleHead);
        newDiv.appendChild(title);

        const authorHead = document.createElement('h3');
        authorHead.textContent = 'Author';
        const author = document.createElement('p');
        author.textContent = `${book.author}`;
        newDiv.appendChild(authorHead);
        newDiv.appendChild(author);

        container.appendChild(newDiv);
    }
}
// Data Storage class: handles storing and getting books
const exampleBooks = [
    {
        author: "example",
        title: "example"
    },
    {
        author: "test",
        title: "test"
    }
]

// Events

window.addEventListener('load', UI.loadBooks(exampleBooks));