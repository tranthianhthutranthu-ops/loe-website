const no = document.getElementById("no");

function moveButton() {

    const margin = 20;

    const maxX = window.innerWidth - no.offsetWidth - margin;
    const maxY = window.innerHeight - no.offsetHeight - margin;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    no.style.position = "fixed";
    no.style.left = x + "px";
    no.style.top = y + "px";
    no.style.transition = "all .25s ease";

}

no.addEventListener("mouseover", moveButton);   // Máy tính
no.addEventListener("touchstart", function(e){  // Điện thoại
    e.preventDefault();
    moveButton();
}, {passive:false});

no.addEventListener("click", moveButton);