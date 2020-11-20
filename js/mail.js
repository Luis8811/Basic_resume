

function sendEmail() {
    email = document.getElementById("email").value;
    subject = document.getElementById("subject").value;
    body = document.getElementById("body").value;
    Email.send({
    SecureToken : "df925a32-35d6-48b0-bbf2-078dfaf23553",
    To : ['myextrajob88@gmail.com', email],
    From : "myextrajob88@gmail.com",
    Subject: subject,
    Body: body,
    })
    .then(function (message) {
    alert("Se ha enviado su mensaje")
    });
    }