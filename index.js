


// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Contact form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message!');
    contactForm.reset();
});

const aboutSection = document.getElementById('about');

// Hide the section
aboutSection.style.display = 'none';

// To show it again, use:
aboutSection.style.display = 'block';

// Select the "About Me" button and the "About Me" section
const aboutButton = document.getElementById('about-btn');
const aboutSection = document.getElementById('about');

// Add a click event listener to the button
aboutButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    console.log('About Me button clicked!');

    // Toggle visibility of the "About Me" section
    if (aboutSection.style.display === 'none') {
        aboutSection.style.display = 'block'; // Show the section
        aboutSection.classList.add('show');  // Add the "show" class for animation
    } else {
        aboutSection.style.display = 'none'; // Hide the section
        aboutSection.classList.remove('show'); // Remove the "show" class
    }
});




