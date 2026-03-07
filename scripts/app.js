document.addEventListener("DOMContentLoaded", () => {

console.log("BookNook started");

const books = [

{title:"Pride and Prejudice", author:"Jane Austen"},
{title:"The Love Hypothesis", author:"Ali Hazelwood"},
{title:"It Ends With Us", author:"Colleen Hoover"},
{title:"Beach Read", author:"Emily Henry"},
{title:"Red, White & Royal Blue", author:"Casey McQuiston"},
{title:"The Notebook", author:"Nicholas Sparks"},
{title:"Love & Other Words", author:"Christina Lauren"}

];

const list = document.getElementById("bookList");

function displayBooks(data){

if(!list) return;

list.innerHTML = "";

data.forEach(book => {

const card = document.createElement("div");

card.className = "col-md-4 mb-3";

card.innerHTML = `
<div class="card book-card p-3">
<h5>${book.title}</h5>
<p>${book.author}</p>
</div>
`;

list.appendChild(card);

});

}

displayBooks(books);

const search = document.getElementById("searchInput");

if(search){

search.addEventListener("input", () => {

const term = search.value.toLowerCase();

const filtered = books.filter(book =>
book.title.toLowerCase().includes(term)
);

displayBooks(filtered);

});

}

const sortBtn = document.getElementById("sortBtn");

if(sortBtn){

sortBtn.addEventListener("click", () => {

books.sort((a,b)=>a.title.localeCompare(b.title));

displayBooks(books);

});

}

const loginBtn = document.getElementById("loginBtn");

if(loginBtn){

loginBtn.addEventListener("click", () => {

const password = document.getElementById("password").value;

if(password === "romance"){

sessionStorage.setItem("loggedIn","true");

console.log("Login success");

document.getElementById("loginStatus").textContent="Login successful";

}else{

console.log("Login failed");

document.getElementById("loginStatus").textContent="Wrong password";

}

});

}

const sessionOutput = document.getElementById("sessionOutput");

if(sessionOutput){

sessionOutput.textContent = JSON.stringify(sessionStorage);

}

const clearBtn = document.getElementById("clearSession");

if(clearBtn){

clearBtn.addEventListener("click", ()=>{

sessionStorage.clear();

location.reload();

});

}

});
