//index.js

const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
    const hamIcon = this.querySelector('.hamburger-icon'); 
    const crossIcon = this.querySelector('.cross-icon'); 
    if (hamIcon.style.display === "none") { 
        hamIcon.style.display = "inline-block"
        menu.style.display = "none"
        crossIcon.style.display = "none"
    } 
    else { 
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
        menu.style.display = "block"
    } 
});

// JavaScript to handle clean URLs for section navigation
document.querySelectorAll('a.links').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();  // Prevent default anchor click behavior

        const targetSectionId = this.getAttribute('data-target');  // Get the target section id from data attribute
        const targetSection = document.getElementById(targetSectionId);  // Find the target section

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });  // Scroll to the section
            history.pushState(null, '', `/${targetSectionId}`);  // Update the URL to a clean URL without #
        }
    });
});
