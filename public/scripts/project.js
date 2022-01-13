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
                <h2><a class="color-it" style="text-decoration:none;color:inherit;" href="${data[i].link}" target="_blank">${data[i].name}</a>&nbsp;&nbsp;&nbsp;<a class="color-it" style="color: #fff; font-size:1.1em;" target="_blank" href="${data[i].repo}"><i class="fa fa-github"></i></a></h2>
                <p>${data[i].desc}</p>
            </div>
        </div>
        <br><br><br>
        `;
        el.appendChild(ael);
    }
});

