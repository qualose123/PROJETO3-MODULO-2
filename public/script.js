const menuMobile = () => {
  const btnicon = document.querySelectorAll(".dropdown-menu-icon");
  btnicon.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const content = event.path[2].children[1];

      content.classList.toggle("active");

      if (content.classList.contains("active")) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }

      content.addEventListener("mouseleave", () => {
        content.classList.remove("active");
        if (!content.classList.contains("active")) {
          content.style.display = "none";
        }
      });
    });
  });
};

menuMobile();
