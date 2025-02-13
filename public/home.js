function showAlert() {
    document.getElementById("customAlert").style.display = "block";
}

function closeAlert() {
    document.getElementById("customAlert").style.display = "none";
}


let redirectDead = document.getElementsByClassName("redirectDead")
let redirectNext = document.getElementsByClassName("redirectNext")
redirectNext.addEventListener("click", function() {
    window.location.href = "dead.html";
}

redirectDead.addEventListener("click", function() {
    window.location.href = "dead.html";
}




