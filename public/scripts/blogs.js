AOS.init();

$.getJSON('https://dev.to/api/articles?username=knaagar', function (data) {
    for(let i = 0; i < data.length; i++){
        let el = document.getElementById("posts");
        let ael = document.createElement("div");
        let x = '/images/blog.jpg';
        ael.innerHTML = `
        <div class="cards" id="special">
            <div class="img">    
                <img src="${data[i].cover_image !== null ? data[i].cover_image : x}">
            </div>
            <div class="text">
                <h2><a class="color-it" style="text-decoration:none;color:inherit;" href="${data[i].url}" target="_blank">${data[i].title}&nbsp;&nbsp;&nbsp;<i class="fa fa-external-link"></i></a></h2>
                <p>${data[i].description.substr(0, 50)}...</p>
                <br>
                <p><i>Date</i>: ${data[i].readable_publish_date}
                <br><i>Comments</i>: ${data[i].comments_count}
                <br><i>Reactions</i>: ${data[i].public_reactions_count}
                <br><i>Tags</i>: ${data[i].tags.replace(/ /g, '').split(',').map(s => '#' + s).join().replace(/,/g, ' ')}</p>
            </div>
        </div>
        <br><br><br>
        `;
        el.appendChild(ael);
    }
});
