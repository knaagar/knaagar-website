AOS.init();

$.getJSON('/resources/projects.json', function(data) {
    for(let i = 0; i < data.length; i++){
        let el = document.getElementById('projects');
        let ael = document.createElement('div');
        ael.innerHTML = `
        <div class="cards" data-aos="fade-up">
            <div class="img">    
                <img src="${data[i].thumb}">
            </div>
            <div class="text">
                <h2>${data[i].name}</h2>
                <p>${data[i].desc}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
        <br><br><br>
        `;
        el.appendChild(ael);
    }
});

// alert(window.innerWidth)