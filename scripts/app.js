import { romanceBooks } from '../assets/data.js';


if (!sessionStorage.getItem("activeUser")) { 
    window.location.href = "pages/login.html";
} else {
    
    console.log("Session Status: Active session found for user: " + sessionStorage.getItem("activeUser"));
}


window.showBookDetails = (id) => {
    const book = romanceBooks.find(b => b.id === id);
    if (!book) return;

    document.getElementById('modalBookTitle').innerText = book.title;
    document.getElementById('modalAuthor').innerText = `By ${book.author}`;
    document.getElementById('modalDescription').innerText = book.description;
    document.getElementById('modalStars').innerText = book.stars;
    document.getElementById('modalImage').src = book.image;
    
    const statusMsg = document.getElementById('save-status');
    statusMsg.style.display = 'none';

    
    const readBtn = document.getElementById('addToReadBtn');
    readBtn.onclick = () => {
        let readingList = JSON.parse(localStorage.getItem('wantToRead')) || [];
        if (!readingList.includes(book.title)) {
            readingList.push(book.title);
            localStorage.setItem('wantToRead', JSON.stringify(readingList));

            console.log("State Change: Added '" + book.title + "' to local storage list.");
        }
        statusMsg.style.display = 'block';
       
    };

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
                    <div class="card h-100 shadow-sm clickable-card border-0">
                        <img src="${book.image}" class="card-img-top" style="height: 350px; object-fit: cover;">
                        <div class="card-body text-center">
                            <h5 class="card-title text-pink mb-1">${book.title}</h5>
                            <p class="text-muted small mb-1">${book.author}</p>
                            <div class="text-warning">${book.stars}</div>
                        </div>
                    </div>
                </div>`;
        });
    };

    searchBar.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        console.log("User Input (Search): " + term);
        
        renderBooks(romanceBooks.filter(b => 
            b.title.toLowerCase().includes(term) || 
            b.author.toLowerCase().includes(term)
        ));
    });

    renderBooks(romanceBooks);
});
