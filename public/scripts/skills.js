AOS.init();

$.getJSON('/resources/skills.json', function(data) {
    for(let i = 0; i < data.length; i++){
        let el = document.getElementById('skills');
        let ael = document.createElement('div');
        ael.innerHTML = `
        <div class="skill-card">
            <div class="img">    
                <img src="${data[i].img}">
            </div>
            <div class="text">
                <h2>${data[i].title}</h2>
                <p>${data[i].desc}</p>
            </div>
        </div>
        <br><br><br>
        `;

        el.appendChild(ael)
    }
});

