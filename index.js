// Book Class: represets a book
class Book {
    constructor(author, title) {
        this.author = author;
        this.title = title;
        this.read = false;
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

        const toggleLabel = document.createElement('label');
        toggleLabel.classList.add('switch');
        const checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        const slider = document.createElement('span');
        slider.classList.add('slider');
        toggleLabel.appendChild(checkBox);
        toggleLabel.appendChild(slider);
        newDiv.appendChild(toggleLabel);
        checkBox.id = book.author;


        container.appendChild(newDiv);
    }

    static displayModal() {
        const scrim = document.querySelector('.scrim');
        scrim.classList.add('toggleDisplay');
    }

    static hideModal() {
        const scrim = document.querySelector('.scrim');
        scrim.classList.remove('toggleDisplay')
    }
}

// Data Storage class: handles storing and getting books
class Store {
    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
}

// Events
window.addEventListener('load', UI.loadBooks(Store.getBooks()));

const modalBtn = document.querySelector('.fab');
modalBtn.addEventListener('click', UI.displayModal);

const scrim = document.querySelector('.scrim');
scrim.addEventListener('click', (event) => {
    if(event.target === scrim) UI.hideModal();
})

const submit = document.querySelector('.submit-btn');
submit.addEventListener('click', (event) => {
    event.preventDefault();
    const author = document.getElementById('author');
    const title = document.getElementById('title');
    const newBook = new Book(author.value, title.value);
    UI.createBookTile(newBook);
    UI.hideModal();
    Store.addBook(newBook);
    author.value = '';
    title.value = '';
    
})


