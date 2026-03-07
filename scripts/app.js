import { romanceBooks } from '../assets/data.js';


if (!sessionStorage.getItem("activeUser")) {
    window.location.href = "pages/login.html";
}

window.showBookDetails = (id) => {
    const book = romanceBooks.find(b => b.id === id);
    document.getElementById('modalBookTitle').innerText = book.title;
    document.getElementById('modalAuthor').innerText = book.author;
    document.getElementById('modalDescription').innerText = book.description;
    document.getElementById('modalStars').innerText = book.stars;
    document.getElementById('modalImage').src = book.image;
    
    const myModal = new bootstrap.Modal(document.getElementById('bookModal'));
    myModal.show();
};

document.addEventListener('DOMContentLoaded', () => {
    const bookDisplay = document.getElementById('book-display');
    const searchBar = document.getElementById('search-bar');

    const renderBooks = (data) => {
        bookDisplay.innerHTML = '';
        data.forEach(book => {
            bookDisplay.innerHTML += `
                <div class="col-md-4 mb-4" onclick="showBookDetails(${book.id})">
                    <div class="card h-100 shadow-sm clickable-card">
                        <img src="${book.image}" class="card-img-top" style="height: 300px; object-fit: cover;">
                        <div class="card-body text-center">
                            <h5 class="card-title text-pink">${book.title}</h5>
                            <p class="text-muted small">${book.author}</p>
                            <div>${book.stars}</div>
                        </div>
                    </div>
                </div>`;
        });
    };

    searchBar.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        renderBooks(romanceBooks.filter(b => b.title.toLowerCase().includes(term)));
    });

    renderBooks(romanceBooks);
});
