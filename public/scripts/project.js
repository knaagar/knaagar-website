AOS.init();

$.getJSON('/resources/projects.json', function(data) {
    for(let i = 0; i < data.length; i++){
        let el = document.getElementById('projects');
        let ael = document.createElement('div');
        let x = 'https://github.com/knaagar';
        ael.innerHTML = `
        <div class="cards">
            <div class="img">    
                <img src="${data[i].thumb}">
            </div>
            <div class="text">
                <h2><a class="color-it" style="text-decoration:none;color:inherit;" href="${data[i].link}" target="_blank">${data[i].name}</a>&nbsp;&nbsp;&nbsp;<a class="color-it" style="color: #fff; font-size:1.1em;" target="_blank" href="${data[i].repo !== '404' ? data[i].repo : x}"><i class="fa fa-github"></i></a></h2>
                <p>${data[i].desc}</p>
            </div>
        </div>
        <br><br><br>
        `;

        data[i].worth ? el.appendChild(ael) : console.log('h')
    }
});
