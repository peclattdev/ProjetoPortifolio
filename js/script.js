let btnMenu = document.getElementById("btn-menu")
let menu = document.getElementById("menu-mobile")
let overlay = document.getElementById("orvelay-menu-mobile")
let btnTop = document.getElementById('btnTop')


btnMenu.addEventListener("click", () => {
  menu.classList.add("abrir-menu")
})

menu.addEventListener("click", () => {
  menu.classList.remove("abrir-menu")
})

overlay.addEventListener("click", () => {
  menu.classList.remove("abrir-menu")
})

btnTop.addEventListener('click', function () {
  document.body.scrollIntoView({behavior: 'smooth'});
})

document.addEventListener('scroll',ocultar)

function ocultar() {
  if(window.scrollY > 10) {
    btnTop.style.display = 'flex'
  } else {
    btnTop.style.display = 'none'
  };
}

ocultar();
