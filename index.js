function openMenu(){
    let menu = document.querySelector(".menu");
    menu.classList.add("open");
}

function closeMenu(){
    let menu = document.querySelector(".menu");
    menu.classList.remove("open");
}

let menuIcon = document.querySelector(".mobile-menu-icon-white");
menuIcon.addEventListener("click", openMenu);

let menuIconClose = document.querySelector(".menu-footer-icon");
menuIconClose.addEventListener("click", closeMenu);
