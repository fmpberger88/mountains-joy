let navLinks = document.querySelectorAll('.navLink');
let parts = document.title.split('|');
let currentPageTitle = parts.length > 1 ? parts[1].trim() : '';


for (let i = 0; i < navLinks.length; i++) {
    if (navLinks[i].textContent === currentPageTitle) {
        navLinks[i].classList.add('active')
    }
}


export function validateEmail() {
    const emailInput = document.querySelector('#email').value;
    const isValidEmail = /^[^\s@]+@[a-zA-Z0-9-]+\.[^\s@]{2,}$/.test(emailInput);
    if (!isValidEmail) {
        alert("Email is not valid");
        return false;
    }
    return true;
}


