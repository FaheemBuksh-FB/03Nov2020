function colorchanger() {
    var handler = document.getElementById("pid");
    handler.innerHTML = "asdasdfasd"
    handler.style.color = "red"
    handler.style.fontSize = "50px"
}

function hider() {
    var handler = document.getElementById("bid")
    var handler1 = document.getElementById("pid")


    if (handler1.style.display == "none") {
        handler.innerHTML = "Shown"
        handler1.style.display = "block";
        handler1.style.animation = 'anim 2s infinite';
        handler.style.animation = 'anim 5s infinite';

        // handler.style.animation}
    }
    else {
        handler.innerHTML = "Hidden"
        handler1.style.display = "none"
        // handler.style.animation
    }
}