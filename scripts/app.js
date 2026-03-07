import { romanceBooks } from '../assets/data.js';


if (!sessionStorage.getItem("activeUser")) {
    window.location.href = "pages/login.html";
}

window.showBookDetails = (id) => {
    const book = romanceBooks.find(b => b.id === id);
    if (!book) return;
    document.getElementById('modalBookTitle').innerText = book.title;
    document.getElementById('modalAuthor').innerText = `By ${book.author}`;
    document.getElementById('modalDescription').innerText = book.description;
    document.getElementById('modalStars').innerText = book.stars;
    document.getElementById('modalImage').src = book.image;
    
    const myModal = new bootstrap.Modal(document.getElementById('bookModal'));
    myModal.show();
};

document.addEventListener('DOMContentLoaded', () => {
    console.log("Session User: " + sessionStorage.getItem("activeUser")); // Rubric requirement
    const bookDisplay = document.getElementById('book-display');
    const searchBar = document.getElementById('search-bar');

    const renderBooks = (data) => {
        bookDisplay.innerHTML = '';
        data.forEach(book => {
            bookDisplay.innerHTML += `
                <div class="col-md-4 mb-4" onclick="showBookDetails(${book.id})">
                    <div class="card h-100 shadow-sm clickable-card">
                        <img src="${book.image}" class="card-img-top" alt="${book.title}" style="height: 300px; object-fit: cover;">
                        <div class="card-body text-center">
                            <h5 class="card-title text-pink">${book.title}</h5>
                            <p class="text-muted small mb-1">${book.author}</p>
                            <div>${book.stars}</div>
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
