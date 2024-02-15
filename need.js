document.addEventListener("DOMContentLoaded", loggedIn)

function loggedIn()
 {
    let logged = "yes"
    if (logged === "yes"){
        document.getElementById("text").textContent += ' Nice'
    }
 }