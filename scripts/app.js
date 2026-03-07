import { romanceBooks } from '../assets/data.js';

document.addEventListener('DOMContentLoaded', () => {
    const bookDisplay = document.getElementById('book-display');
    const searchBar = document.getElementById('search-bar');

    // Function to show the modal with book details
    window.showBookDetails = (id) => {
        const book = romanceBooks.find(b => b.id === id);
        document.getElementById('modalBookTitle').innerText = book.title;
        document.getElementById('modalAuthor').innerText = `By ${book.author}`;
        document.getElementById('modalDescription').innerText = book.description;
        document.getElementById('modalStars').innerText = book.stars;
        document.getElementById('modalImage').src = book.image;
        
        const myModal = new bootstrap.Modal(document.getElementById('bookModal'));
        myModal.show();
    };

    const renderBooks = (data) => {
        bookDisplay.innerHTML = '';
        data.forEach(book => {
            bookDisplay.innerHTML += `
                <div class="col-md-4" onclick="showBookDetails(${book.id})">
                    <div class="card h-100 shadow-sm">
                        <img src="${book.image}" class="card-img-top rounded-top" alt="${book.title}" style="height: 200px; object-fit: cover;">
                        <div class="card-body text-center">
                            <h5 class="card-title text-pink">${book.title}</h5>
                            <p class="card-text small">${book.stars}</p>
                            <span class="badge bg-cute-pink">View Details</span>
                        </div>
                    </div>
                </div>`;
        });
    };

    searchBar.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = romanceBooks.filter(b => b.title.toLowerCase().includes(term));
        renderBooks(filtered);
    });

    renderBooks(romanceBooks);
});
