import { romanceBooks } from '../assets/data.js';

// 1. Make the function PUBLIC so HTML onclick can see it
window.showBookDetails = (id) => {
    const book = romanceBooks.find(b => b.id === id);
    if (!book) return;

    // Fill the modal with data
    document.getElementById('modalBookTitle').innerText = book.title;
    document.getElementById('modalAuthor').innerText = `By ${book.author}`;
    document.getElementById('modalDescription').innerText = book.description;
    document.getElementById('modalStars').innerText = book.stars;
    document.getElementById('modalImage').src = book.image;
    
    // Open the modal using Bootstrap's built-in command
    const modalElement = document.getElementById('bookModal');
    const bModal = new bootstrap.Modal(modalElement);
    bModal.show();
};

document.addEventListener('DOMContentLoaded', () => {
    const bookDisplay = document.getElementById('book-display');
    const searchBar = document.getElementById('search-bar');

    // 2. Function to build the book cards
    const renderBooks = (data) => {
        bookDisplay.innerHTML = '';
        data.forEach(book => {
            bookDisplay.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card h-100 shadow-sm border-pink clickable-card" onclick="showBookDetails(${book.id})">
                        <img src="${book.image}" class="card-img-top" alt="${book.title}" style="height: 250px; object-fit: cover;">
                        <div class="card-body text-center">
                            <h5 class="card-title text-pink">${book.title}</h5>
                            <p class="card-text text-muted small">${book.author}</p>
                            <div class="stars-display mb-2">${book.stars}</div>
                            <span class="btn btn-sm btn-pink-outline">View Details</span>
                        </div>
                    </div>
                </div>`;
        });
    };

    // 3. Live Search Logic
    searchBar.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = romanceBooks.filter(b => 
            b.title.toLowerCase().includes(term) || 
            b.author.toLowerCase().includes(term)
        );
        renderBooks(filtered);
    });

    // Initial render
    renderBooks(romanceBooks);
});
