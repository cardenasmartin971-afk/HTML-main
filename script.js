function showSection(section) {
  const portfolio = document.getElementById("portfolio-view");
  const dashboard = document.getElementById("dashboard-view");
  const navbar = document.querySelector(".navbar");

  if (section === "dashboard") {
    portfolio.style.display = "none";
    dashboard.style.display = "block";
    navbar.style.display = "none"; // Ocultamos la nav del portafolio para ver el dashboard completo
  } else {
    portfolio.style.display = "block";
    dashboard.style.display = "none";
    navbar.style.display = "flex";
  }
}

// Smooth scroll para los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
