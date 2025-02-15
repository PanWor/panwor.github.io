const currentYear = new Date().getFullYear();
const paragraph = document.createElement('p');
paragraph.innerHTML = `&copy; ${currentYear} PanWor`;

if (document.querySelector('footer')) {
    document.querySelector('footer').appendChild(paragraph);
}