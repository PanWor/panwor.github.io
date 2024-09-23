function sortProjects(data) {
    console.log(`SortProjects function called`);
    if (window.location.href.includes('?order=')) {
          const order = window.location.href.split('?order=')[1];
          console.log(order);
      
          if (order === 'asc') {
              return data.sort((a, b) => a.title.localeCompare(b.title)); // Sort articles by title ascending
          } else if (order === 'desc') {
              return data.sort((a, b) => b.title.localeCompare(a.title)); // Sort articles by title descending
          } else if (order === 'new') {
              return data.sort((a, b) => b.date.localeCompare(a.date)); // Sort articles by date descending
          } else if (order === 'old') {
              return data.sort((a, b) => a.date.localeCompare(b.date)); // Sort articles by date ascending
          } else {
              return data; // Sort by pre-set list (default)
          }
      } else {
          return data; // Sort by pre-set list (default)
      }
}

function whatLanguage() {
    if (window.location.href.includes('/pl/projects')) {
        return 'pl';
    } else {
        return 'en';
    }
}

function whereIsJSON() {
    if (window.location.href.includes('/pl/projects')) {
        return '../../projects.json';
    } else {
        return '../projects.json';
    }
}

function languageEmoji(lang) {
    if (lang === 'pl') {
        return '🇵🇱';
    } else if (lang === 'en') {
        return '🇺🇸';
    } else {
        return '–';
    }
}

function languageButtons(lang) {
    if (lang === 'pl') {
        return {demo: 'Demo', source: 'Kod projektu', 'see-more': 'Zobacz więcej'};
    } else if (lang === 'en') {
        return {demo: 'Demo', source: 'Source', 'see-more': 'See more'};
    } else {
        return {demo: 'Demo', source: 'Source', 'see-more': 'See more'};
    }
}

const projectsContainer = document.querySelector('#projects');
  
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
        data = data.articles[whatLanguage()];
        console.log(`Projects: `, data);
        const sortedProjects = sortProjects(data);
                
        sortedProjects.forEach(project => {
          let title = project.title;
          let description = project.description;
          let dateWord = project['date-word'];
          let lang = languageEmoji(project.lang);
          let demo = project['demo'] ? project['demo'] : null;
          let source = project['source'] ? project['source'] : null;
          let seeMore = project['see-more'] ? project['see-more'] : null;
  
          projectsContainer.innerHTML += `
            <div class="project-card">
                <div class="lang">${lang}</div>
                <time>${dateWord}</time>
                <a class="project-title">${title}</a>
                <h4>${description}</h4>
                <div class="links anchored">
                    ${demo ? `<a class="button small flex" href="${demo}" target="_blank" rel="noreferrer">${buttons.demo}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:0.75rem;height:0.75rem;fill:currentColor"><g data-name="Layer 2"><g data-name="external-link"><rect width="24" height="24" opacity="0"></rect><path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z"></path><path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z"></path></g></g></svg></a>` : ``}
                    ${source ? `<a class="button small flex" href="${source}" target="_blank" rel="noreferrer">${buttons.source} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:0.75rem;height:0.75rem;fill:currentColor"><g data-name="Layer 2"><g data-name="external-link"><rect width="24" height="24" opacity="0"></rect><path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z"></path><path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z"></path></g></g></svg></a>` : ``}
                    ${seeMore ? `<a class="button small flex" href="${seeMore}" rel="noreferrer">${buttons['see-more']} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:0.75rem;height:0.75rem;fill:currentColor"><g data-name="Layer 2"><g data-name="external-link"><rect width="24" height="24" opacity="0"></rect><path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z"></path><path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z"></path></g></g></svg></a>` : ``}
                </div>
            </div>
                      `
  
          console.log(title, description, dateWord, lang, demo, source, seeMore);
      });
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
});