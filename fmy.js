let sp = document.querySelector(".face-three .spans .sp");
let h3 = document.querySelector(".face-three .spans .sp h3");

let sp2 = document.querySelector(".face-three .spans .sp2");
let h4 = document.querySelector(".face-three .spans .sp2 h3");

// boxs
let bx3 = document.querySelector(".face-three-content-2 .bxx1 .name3");
let bx6 = document.querySelector(".face-three-content-2 .bxx1 .name6");
let bx7 = document.querySelector(".face-three-content-2 .bxx1 .name7");



// Basic 
h3.onclick = function basic() {
    h3.classList.add(`active`);

    if (h3.classList.contains("active")) {
        h4.classList.remove("active");
    }
}

sp.onclick = function basic() {
    sp.classList.add(`active`);
    
    if (sp.classList.contains("active")) {
        sp2.classList.remove("active");
    }
    
    if(sp.classList.contains("active")) {
        bx3.innerHTML = "$2.80";
        bx6.innerHTML = "$4.20";
        bx7.innerHTML = "$7.00";
    }
}

// PREMIUM

h4.onclick = function premium() {
    h4.classList.add(`active`);

    if (h4.classList.contains("active")) {
        h3.classList.remove("active");
    }
}
sp2.onclick = function premium() {
    sp2.classList.add(`active`);

    if (sp2.classList.contains("active")) {
        sp.classList.remove("active");
    }
    
    if(sp2.classList.contains("active")) {
        bx3.innerHTML = "$10.99";
        bx6.innerHTML = "$14.50";
        bx7.innerHTML = "$20.50";
    }
}
