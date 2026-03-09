# 💖 BookNook

### Authorship & Attribution 
* **Author:** Isabella O'Rear
* **Resources:**
    * [Goodreads](https://www.goodreads.com/): Main design inspiration for layout and primary source for book cover images.
    * [Google Fonts](https://fonts.google.com/): Used for typography to create the "romance" aesthetic.
    * [ChatGPT](https://chatgpt.com/): Used for generating book summaries and JavaScript logic assistance.
    * [Microsoft Copilot](https://copilot.microsoft.com/): Assisted with CSS formatting and troubleshooting.
    * [Barry Cumbie (Bearbot)](https://github.com/barrycumbie/bearbot): Primary reference for folder structure and authentication patterns.
    * [Codecademy](https://www.codecademy.com/): Reference for JavaScript fundamentals.
    * [W3Schools](https://www.w3schools.com/): Reference for CSS component styling and color hex codes.
    * [Bootstrap 5.3](https://getbootstrap.com/): Framework for responsive design.

---
---

>* **Tagline:** "Tracking the best in romance, from Forks to Mayfair."

### User Story
As a romance book reader, I want to browse a curated collection of popular titles, search for specific authors, and save books I'm interested in to a "Want to Read" list so that I can easily track and remember what I wanted to read.

### Links
* **Repository:** [GitHub Repo](https://github.com/isabellaorear31-design/booknook-app)
* **Live App:** [Deployed Site](https://isabellaorear31-design.github.io/booknook-app/)
* **Design Evidence:** [Inspiration Screenshot](./docs/inspiration.png)

---

### Model & Inspiration Evidence
I modeled my book cards and search functionality after **Goodreads**. I improved/made the design my own by adding a pink theme/aesthetic and I made a login wall so that it felt more personalized. 

---
### Code Block + Explanation
This snippet from `scripts/app.js` demonstrates how the app handles user interaction and data flow:

```javascript
window.showBookDetails = (id) => {
    const book = romanceBooks.find(b => b.id === id);
    if (!book) return;

    document.getElementById('modalBookTitle').innerText = book.title;
    document.getElementById('modalAuthor').innerText = `By ${book.author}`;
    document.getElementById('modalDescription').innerHTML = book.description;
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

```
---  
