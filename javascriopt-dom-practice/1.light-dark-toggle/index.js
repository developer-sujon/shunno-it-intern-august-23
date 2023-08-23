// select toggle icon
const toggleBtn = document.getElementById("toggleDark");
const darkMode = localStorage.getItem("darkMode");

const enableDarkMode = () => {
  document.body.classList.add("dark-theme");
  localStorage.setItem("darkMode", true);
};
const disableDarkMode = () => {
  document.body.classList.remove("dark-theme");
  localStorage.setItem("darkMode", false);
};

toggleBtn.addEventListener("click", () => {
  let darkMode = localStorage.getItem("darkMode");

  if (darkMode == "false") {
    toggleBtn.classList.add("bi-moon");
    enableDarkMode();
  } else {
    toggleBtn.classList.remove("bi-moon");
    disableDarkMode();
  }
});
