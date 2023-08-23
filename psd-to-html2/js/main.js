/**
 * Step 1. select items
 *
 *
 * **/

// step .1

const menuShowHide = (isClicked) => {
  const menu = document.querySelector(".nav-bar ul");
  if (isClicked) {
    menu.classList.add("show-menu");
  } else {
    menu.classList.remove("show-menu");
  }
};

document.querySelector(".menu-toggle").addEventListener("click", () => {
  menuShowHide(true);
});
