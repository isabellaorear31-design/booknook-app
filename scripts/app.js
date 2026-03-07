import { romanceBooks } from '../assets/data.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log("BookNook Initialized: DOM fully loaded.");
    const bookDisplay = document.getElementById('book-display');
    const searchBar = document.getElementById('search-bar');

    const renderBooks = (data) => {
        bookDisplay.innerHTML = '';
        data.forEach(book => {
            bookDisplay.innerHTML += `
                <div class="col-md-4">
                    <div class="card h-100 shadow-sm border-0">
                        <div class="card-body">
                            <h5 class="card-title text-primary">${book.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${book.author}</h6>
                            <p class="badge bg-soft-pink text-dark">${book.series}</p>
                            <p class="card-text small text-secondary">Published: ${book.year}</p>
                        </div>
                    </div>
                </div>`;
        });
    };

    searchBar.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        console.log(`Searching for: ${term}`); // Debugging log for rubric
        const filtered = romanceBooks.filter(b => 
            b.title.toLowerCase().includes(term) || 
            b.author.toLowerCase().includes(term) ||
            b.series.toLowerCase().includes(term)
        );
        renderBooks(filtered);
    });

    renderBooks(romanceBooks);
});
