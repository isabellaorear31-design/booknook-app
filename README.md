# 💖 BookNook

### Authorship & Attribution 
* **Author:** Isabella O'Rear
* **[Goodreads](https://www.goodreads.com/):** Main design inspiration for layout and primary source for all book cover images.
* **[Google Fonts](https://fonts.google.com/):** Used for typography to create the "romance" aesthetic.
* **[ChatGPT](https://chatgpt.com/):** Used for generating creative book summaries, one-liners, and assistance with JavaScript logic.
* **[Microsoft Copilot](https://copilot.microsoft.com/):** Assisted with CSS formatting and troubleshooting technical code challenges.
* **[Barry Cumbie (Bearbot)](https://github.com/barrycumbie/bearbot):** Primary reference for the project outline, folder structure, and front-end authentication patterns.
* **[Codecademy](https://www.codecademy.com/):** Reference for JavaScript (JS) syntax and logic fundamentals.
* **[W3Schools](https://www.w3schools.com/):** Used for color hex code references and CSS component styling.
* **Library:** [Bootstrap 5.3](https://getbootstrap.com/) for responsive design.
---

> "Tracking the best in romance, from Forks to Mayfair."

### User Story
As a romance book lover, I want to browse a curated collection of popular titles, search for specific authors like Stephenie Meyer, and save books I'm interested in to a "Want to Read" list so that I never forget my next obsession.

### Links
* **Repository:** [GitHub Repo](https://github.com/isabellaorear31-design/booknook-app)
* **Live App:** [Deployed Site](https://isabellaorear31-design.github.io/booknook-app/)
* **Design Evidence:** [Inspiration Screenshot](./docs/inspiration.png)

---

### Model & Inspiration Evidence
I modeled my book cards and search functionality after the **Goodreads** browsing experience. I improved the design by adding a cohesive "girly pink" aesthetic and a simplified login wall to make the experience feel more exclusive and personalized.

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
    
    const myModal = new bootstrap.Modal(document.getElementById('bookModal'));
    myModal.show();
};
