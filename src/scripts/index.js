function goTop () {
    const btnTop = document.getElementById("btnTop").addEventListener("click",()=> {
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
});
    });
}

function checkScroll() {
  const btnTopImg = document.querySelector(".menu");
  const actualScroll = window.scrollY || window.pageYOffset;
  if (actualScroll > 623) {
    console.log("Testando limite " + actualScroll);
    btnTopImg.style.display = "block";
  }
  else {
      btnTopImg.style.display = "none";
  }
}

function openMenu() {
  const btnClose = document.getElementById("close");
  const btnOpenMenu = document.getElementById("menu-line");
  const content = document.querySelector(".languages");

  btnOpenMenu.addEventListener("click", () => {
    showMenu();
    btnClose.style.display = "block";
  });

  btnClose.addEventListener("click", () => {
    hideMenu();
    btnClose.style.display = "none";
  });

  function showMenu() {
    content.style.display = "flex";
    content.classList.remove("fade-out"); 
    content.classList.add("fade-in");
  }

  function hideMenu() {
    content.classList.remove("fade-in");
    content.classList.add("fade-out");

    // Espera a animação terminar (400ms) antes de esconder
    setTimeout(() => {
      content.style.display = "none";
      content.classList.remove("fade-out");
    }, 400);
  }
}

function closeMenu() {
  const content = document.querySelector(".languages");
  const btnClose = document.getElementById("close");
  const btnOpenMenu = document.getElementById("menu-line");

  btnClose.addEventListener("click", () => {
    content.style.display = "none";
    btnClose.style.display = "none";
  });

  // Fecha ao clicar fora do menu 
  document.addEventListener("click", (event) => {
    if (content.style.display !== "flex") return;

    const clickInsideMenu = content.contains(event.target);
    const clickOnOpenBtn = btnOpenMenu.contains(event.target);
    const clickOnCloseBtn = btnClose.contains(event.target);

    if (!clickInsideMenu && !clickOnOpenBtn && !clickOnCloseBtn) {
      content.style.display = "none";
      btnClose.style.display = "none";
    }
  });
}


window.addEventListener('scroll', checkScroll);
goTop();
openMenu();
closeMenu();