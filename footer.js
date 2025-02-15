const footer = document.querySelector('footer');
if (footer) {
    if (window.location.href.includes('/pl')) {
        const disclaimer = document.createElement('p');
        disclaimer.id = 'disclaimer';
        disclaimer.innerHTML = 'Projekt jest przerobioną wersją strony <a href="https://www.taniarascia.com/">www.taniarascia.com</a>';
        const more = document.createElement('p');
        more.innerHTML = '<span id="more">Więcej informacji...</span>';
        const moreInfo = document.createElement('p');
        moreInfo.id = 'more-info';
        moreInfo.style.display = 'none';
        moreInfo.innerHTML = 'Wiem jak programować, ale nie jak zaprojektować dobrą i ładną stronę.<br> Strona Tanii jest ładna i minimalistyczna, więc przyznaję się do dużej inspiracji jej designem.';

        footer.appendChild(disclaimer);
        footer.appendChild(more);
        footer.appendChild(moreInfo);

        document.getElementById("more").addEventListener("click", function() {
            document.getElementById("more-info").style.display = "block";
            document.getElementById("more").style.display = "none";
        });
    } else {
        const disclaimer = document.createElement('p');
        disclaimer.id = 'disclaimer';
        disclaimer.innerHTML = 'The design is scrapped version of <a href="https://www.taniarascia.com/">www.taniarascia.com</a>';
        const more = document.createElement('p');
        more.innerHTML = '<span id="more">More info...</span>';
        const moreInfo = document.createElement('p');
        moreInfo.id = 'more-info';
        moreInfo.style.display = 'none';
        moreInfo.innerHTML = 'I know how to code, but I\'m not skilled in design.<br> Tania\'s website is pretty and minimalist, so I admit to being very inspired by her design. ';

        footer.appendChild(disclaimer);
        footer.appendChild(more);
        footer.appendChild(moreInfo);

        document.getElementById("more").addEventListener("click", function() {
            document.getElementById("more-info").style.display = "block";
            document.getElementById("more").style.display = "none";
        });
    }
}