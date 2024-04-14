let navLinks = document.querySelectorAll('.navLink');
let currentPageTitle = document.title.split('|')[1].trim();

for (let i = 0; i < navLinks.length; i++) {
    if (navLinks[i].textContent === currentPageTitle) {
        navLinks[i].classList.add('active')
    }
}