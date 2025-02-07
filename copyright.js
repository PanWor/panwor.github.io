const currentYear = new Date().getFullYear();
const paragraph = document.createElement('p');
paragraph.innerHTML = `&copy; ${currentYear} PanWor`;

const footer = document.querySelector('footer');
if (footer) {
    footer.appendChild(paragraph);
}