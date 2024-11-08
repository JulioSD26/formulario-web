document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    fetch("http://localhost:3000/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name, email, message}),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("responseMessage").innerHTML = `<div class="alert alert-success">${data.message}</div>`;
        document.getElementById("contactForm").reset();
    })
    .catch(error => {
        document.getElementById("responseMessage").innerHTML = `<div class="alert alert-danger">Error al enviar el formulario</div>`;
        console.error("Error:", error);
    });
});