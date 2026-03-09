# 💖 BookNook 
A book discovery and tracking web app directly inspired by Goodreads. Dedicated specifically to romance books. 

### Authorship & Attribution 
* **Author:** Isabella O'Rear
* **Resources:**
    * [Goodreads](https://www.goodreads.com/): Used for images, as well as inspiration for app itself.
    * [Google Fonts](https://fonts.google.com/): Used for fonts.
    * [ChatGPT](https://chatgpt.com/): Used for book summaries and some Java help.
    * [Microsoft Copilot](https://copilot.microsoft.com/): Helped with CSS/Java formatting.
    * [Barry Cumbie (Bearbot)](https://github.com/barrycumbie/bearbot): Primary reference for Github layout.
    * [Codecademy](https://www.codecademy.com/): Reference for Java.
    * [W3Schools](https://www.w3schools.com/): Reference for styling and color hex codes.
    
---

>* **Tagline:** "Tracking the best in romance, from Forks to Mayfair."

### User Story
As a romance book reader, I want to browse a curated collection of popular titles, search for specific authors, and save books I'm interested in to a "Want to Read" list so that I can easily track and remember what I wanted to read.

---

### Links
* **Repository:** [GitHub Repo](https://github.com/isabellaorear31-design/booknook-app)
* **App:** [Deployed Site](https://isabellaorear31-design.github.io/booknook-app/)
* **Verification:** This app has been tested for responsiveness on iPhone 14 and Chrome Desktop.
  
---

### Design Pics
![Inspiration Screenshot](https://github.com/isabellaorear31-design/booknook-app/issues/1#issue-4046882233)

---

### Model & Inspiration Evidence
* **Design Evidence:** [Inspiration Screenshot](https://github.com/isabellaorear31-design/booknook-app/issues/1#issue-4046882233)
I modeled my book cards and search functionality after **Goodreads**. I improved/made the design my own by adding a pink theme/romantic aesthetic and I made a login wall so that it felt more personalized. 


---

### Code Block + Explanation
This snippet from `scripts/app.js` connects the DOM to my data. 

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

### Architecture/Infrastructure
* **Tools/Libraries:** [Bootstrap 5.3](https://getbootstrap.com/): Used for the responsive layout and grid.
 **Note:** This is a front-end app fetching internal data for `data.js` file. It uses `sessionStorage` for login and `localStorage` to save the "Want to Read" list.
  
