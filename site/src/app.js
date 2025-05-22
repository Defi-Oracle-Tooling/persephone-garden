// JavaScript entry point for the website
console.log("Welcome to Persephone's Garden!");

// Add interactivity for navigation
const navLinks = document.querySelectorAll('nav ul li a');

// Refactored repetitive code for navigation
const scrollToSection = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
};

navLinks.forEach(link => link.addEventListener('click', scrollToSection));
