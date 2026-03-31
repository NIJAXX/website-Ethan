function showPortfolio() {
  const intro = document.getElementById("intro-card");
  const portfolio = document.getElementById("portfolio");

  // Ajoute la classe pour lancer l'animation de disparition
  intro.classList.add("fade-out");

  // Après 800ms (durée de l'animation), on cache la carte et montre le portfolio
  setTimeout(() => {
    intro.style.display = "none";
    portfolio.classList.remove("hidden");
    portfolio.classList.add("fade-in");
  }, 800);
}

const btn = document.getElementById("toggle-btn");
const bubble = document.getElementById("info-bubble");

btn.addEventListener("click", () => {
    bubble.classList.toggle("visible");
});
