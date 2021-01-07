function handleMenuClick(){
    let menu = document.querySelector(".menu");
    menu.classList.add("open");
}

let menuIcon = document.querySelector(".mobile-menu-icon-white");
menuIcon.addEventListener("click", handleMenuClick);