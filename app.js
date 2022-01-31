//book class: represent a book
class Book{
    constructor(tile, author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
}

//UI class: to handle UI task
class UI{
    static displayBooks() {
        const StoredBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '3434434
            },
            {
                title: 'Book two',
                author: 'Mary Joe',
                isbn: '1234567'
            } 
    ];
    const books = StoredBooks;

    books.forEach((book)=> UI.addBookToList());
    }
    static addBookToList(book){
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td>${book.delete}</td>
        <td><a href="# class=btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);

    }
}

//store class: handles storage

//event: Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);
//event: to add a book

//event: remove a book