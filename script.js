window.onscroll = () => {
  var current = "";

  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll(".main-nav a");
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};

document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burger-menu");
  const closeButton = document.getElementById("close-button");
  const mainNav = document.querySelector(".main-nav");
  const anchors = document.querySelectorAll("a");

  burgerMenu.addEventListener("click", function () {
    mainNav.classList.add("active");
    closeButton.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    mainNav.classList.remove("active");
    closeButton.style.display = "none";
  });

  anchors.forEach((anchor) => {
    anchor.addEventListener("click", function () {
      mainNav.classList.remove("active");
      closeButton.style.display = "none";
    });
  });
});
