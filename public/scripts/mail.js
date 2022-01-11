AOS.init();

const form = document.getElementById("contfo");

const formEvent = form.addEventListener("submit", (event) => {
    event.preventDefault();
    let mail = new FormData(form);
    sendMail(mail);
});

const sendMail = (mail) => {
    fetch("/send", {
    method: "post",
    body: mail,

    }).then((response) => {
        return response.json();
    });
};