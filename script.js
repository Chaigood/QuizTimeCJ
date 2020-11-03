var body = document.body;

var h1El = document.createElement("h1");
h1El.textContent = "JavaScript Quiz";
body.appendChild(h1El).style.textAlign = "center";
body.appendChild(h1El).style.fontWeight = "900";

var h2E2 = document.createElement("h2");
h2E2.textContent = "Javascript is hard. This timed quiz will test your skills. Be sure to log your high scores when you finish.";
body.appendChild(h2E2).style.textAlign = "center";
body.appendChild(h2E2).style.color = "blue";

function button() {
    var btn = document.createElement("Button");
    btn.innerHTML = "Wrong";
}