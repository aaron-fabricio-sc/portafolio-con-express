const d = document;

const btnMenu = d.querySelector("#button-menu");
const sideBar = d.querySelector(".sidebar");

btnMenu.addEventListener("click", (e) => {
  sideBar.classList.toggle("active");
});
