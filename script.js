// script.js - JavaScript for Book Writer Portfolio

// Books data
const books = [
    {
        title: "Whispers of the Wind",
        price: "$19.99",
        description: "A tale of love and loss in the Scottish highlands.",
        cover: "https://via.placeholder.com/300x400"
    },
    {
        title: "Shadows of Yesterday",
        price: "$22.99",
        description: "Mystery and intrigue in a small coastal town.",
        cover: "https://via.placeholder.com/300x400"
    },
    {
        title: "Echoes of Eternity",
        price: "$24.99",
        description: "Time travel adventure across centuries.",
        cover: "https://via.placeholder.com/300x400"
    },
    {
        title: "Dreams of Tomorrow",
        price: "$21.99",
        description: "A futuristic romance in a world of possibilities.",
        cover: "https://via.placeholder.com/300x400"
    }
];

// Populate books
function populateBooks() {
    const booksGrid = document.getElementById('books-grid');
    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1 fade-in';
        bookCard.innerHTML = `
            <img src="${book.cover}" alt="${book.title}" class="w-full h-64 object-cover rounded-lg mb-4 responsive-img">
            <h3 class="text-xl font-bold text-gray-900 mb-2">${book.title}</h3>
            <p class="text-gray-600 mb-4">${book.description}</p>
            <p class="text-lg font-semibold text-indigo-600 mb-4">${book.price}</p>
            <button onclick="alert('Thank you for your interest!')" class="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition btn-hover">Buy Now</button>
        `;
        booksGrid.appendChild(bookCard);
    });
}

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message!');
    this.reset();
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});

// Fade in on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

// Observe elements with fade-in class
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Initialize books on page load
document.addEventListener('DOMContentLoaded', populateBooks);