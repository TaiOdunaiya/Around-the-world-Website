const container = document.querySelector(".container");

function closeNavbar() {
  container.classList.remove("change");
}

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", closeNavbar);

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", closeNavbar);
});

const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});

Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});

const yearEl = document.getElementById("current-year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
