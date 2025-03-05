document.querySelector('#featured-projects').innerHTML = whatLanguage() === 'pl' ? '<p style="color:var(--muted-color);font-size:.9rem;">Ładowanie projektów...</p>' : '<p style="color:var(--muted-color);font-size:.9rem;">Loading projects...</p>';

function whatLanguage() {
    if (window.location.href.includes('/pl')) {
        return 'pl';
    } else {
        return 'en';
    }
}

function whereIsJSON() {
    if (window.location.href.includes('/pl')) {
        return '../projects.json';
    } else {
        return 'projects.json';
    }
}

function whereIsIcons() {
    if (window.location.href.includes('/pl')) {
        return '../images/';
    } else {
        return 'images/';
    }
}

function languageEmoji(lang) {
    if (lang === 'pl') {
        return '🇵🇱';
    } else if (lang === 'en') {
        return '🇺🇸';
    } else if (lang === 'en pl') {
        return '🇺🇸 🇵🇱';
    } else {
        return '–';
    }
}

function languageEmojiTitle(projectLang, langUsed) {
    if (langUsed=== 'pl') {
        if (projectLang === 'pl') {
            return 'Ten projekt jest w języku polskim';
        } else if (projectLang === 'en') {
            return 'Ten projekt jest w języku angielskim';
        } else if (projectLang === 'en pl') {
            return 'Ten projekt jest w języku polskim i angielskim';
        } else {
            return 'Ten projekt nie ma określonego języka';
        }
    } else if (langUsed === 'en') {
        if (projectLang === 'pl') {
            return 'This project is in Polish';
        } else if (projectLang === 'en') {
            return 'This project is in English';
        } else if (projectLang === 'en pl') {
            return 'This project is in Polish and English';
        } else {
            return 'This project has no defined language';
        }
    } else {
        return 'Error / Błąd';
    }
}

function languageButtons(lang) {
    if (lang === 'pl') {
        return {demo: 'Demo', source: 'Kod projektu', 'see-more': 'Zobacz więcej', 'pc': 'Przystosowany do PC', 'mobile': 'Przystosowany do smartfonów'};
    } else if (lang === 'en') {
        return {demo: 'Demo', source: 'Source', 'see-more': 'See more', 'pc': 'PC-compatible', 'mobile': 'Mobile-compatible'};
    } else {
        return {demo: 'Demo', source: 'Source', 'see-more': 'See more', 'pc': 'PC-compatible', 'mobile': 'Mobile-compatible'};
    }
}

const projectsContainer = document.querySelector('#featured-projects');

fetch(whereIsJSON())
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        let success = true; 
        buttons = languageButtons(whatLanguage());
        imagesSource = whereIsIcons();
        data = data.articles[whatLanguage()];
        console.log(`Featured Projects: `, data);

        document.querySelector('#featured-projects').textContent = '';
        
        data.forEach(project => {
            if (project.featured) {
                let title = project.title;
                let description = project.description;
                let dateWord = project['date-word'];
                let lang = languageEmoji(project.lang);
                let langTitle = languageEmojiTitle(project.lang, whatLanguage());
                let demo = project['demo'] ? project['demo'] : null;
                let source = project['source'] ? project['source'] : null;
                let seeMore = project['see-more'] ? project['see-more'] : null;
                let pcCompatibility = project['pc'] ? project['pc'] : null;
                let mobileCompatibility = project['mobile'] ? project['mobile'] : null;

                projectsContainer.innerHTML += `
                    <div class="project-card">
                        <div class="lang" title="${langTitle}">${lang}</div>
                        <time>${dateWord}</time>
                        <a class="project-title">${title}</a>
                        <h4>${description}</h4>
                        <div class="links anchored">
                            ${demo ? `<a class="button small flex" href="${demo}" target="_blank" rel="noreferrer">${buttons.demo}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:0.75rem;height:0.75rem;fill:currentColor"><g data-name="Layer 2"><g data-name="external-link"><rect width="24" height="24" opacity="0"></rect><path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z"></path><path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z"></path></g></g></svg></a>` : ``}
                            ${source ? `<a class="button small flex" href="${source}" target="_blank" rel="noreferrer">${buttons.source} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:0.75rem;height:0.75rem;fill:currentColor"><g data-name="Layer 2"><g data-name="external-link"><rect width="24" height="24" opacity="0"></rect><path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z"></path><path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z"></path></g></g></svg></a>` : ``}
                            ${seeMore ? `<a class="button small flex" href="${seeMore}" rel="noreferrer">${buttons['see-more']} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:0.75rem;height:0.75rem;fill:currentColor"><g data-name="Layer 2"><g data-name="external-link"><rect width="24" height="24" opacity="0"></rect><path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z"></path><path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z"></path></g></g></svg></a>` : ``}
                        </div>
                        ${pcCompatibility ? `<img class="compatibility" src="${imagesSource}pc.svg" alt="${pcCompatibility}" title="${pcCompatibility}">` : ``}
                        ${mobileCompatibility ? `<img class="compatibility mobile" src="${imagesSource}mobile.svg" alt="${mobileCompatibility}" title="${mobileCompatibility}">` : ``}
                    </div>
                `
                
                console.log(title, description, dateWord, lang, demo, source, seeMore);
            }
        });
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
