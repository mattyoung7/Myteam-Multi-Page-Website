// Responsive Navbar
const hamburger = document.querySelector('#hamburger');
const close = document.querySelector('#close');
const navLinks = document.querySelector('#nav-links');

hamburger.addEventListener('click', () => {
    const visibility = navLinks.getAttribute('data-visible');

    if (visibility === 'false') {
        navLinks.setAttribute('data-visible', true);
        hamburger.setAttribute('src', 'assets/icon-close.svg');
    } else if (visibility === 'true') {
        navLinks.setAttribute('data-visible', false);
        hamburger.setAttribute('src', 'assets/icon-hamburger.svg');
    }
});

// Team Grid Cards
const cardBtns = document.querySelectorAll('.card-btn');

for(let cardBtn of cardBtns) {

    cardBtn.addEventListener('click', (e) => {
        const cross = e.target.firstElementChild;
        const cardBack = e.target.previousElementSibling;
        const cardFront = cardBack.previousElementSibling;
        
        cardBtn.classList.toggle('card-btn-coral');
        cardBtn.classList.toggle('card-btn-teal');
        cross.classList.toggle('rotate');
        cardBack.classList.toggle('hidden');
        cardFront.classList.toggle('hidden');
    });
}