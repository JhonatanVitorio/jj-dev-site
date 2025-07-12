function handleHeaderScroll() {
  window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle('scrolled', window.scrollY > 10);
  });
}

function initIntersectionObserver() {
  const cards = document.querySelectorAll('.service-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  cards.forEach(card => observer.observe(card));
}

function smoothAnchorScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      const headerOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    });
  });
}

function setupToggleMoreButtons() {
  document.querySelectorAll(".btn-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".service-box");
      const moreText = card.querySelector(".more-text");

      const isVisible = moreText.style.display === "block";

      // Fecha todos os outros
      document.querySelectorAll(".more-text").forEach(text => text.style.display = "none");
      document.querySelectorAll(".btn-toggle").forEach(button => button.textContent = "Ver mais");

      // Abre somente o clicado, se ainda não estava aberto
      if (!isVisible) {
        moreText.style.display = "block";
        btn.textContent = "Ver menos";
      }
    });
  });
}

function fadeInElementsOnLoad() {
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, index * 150);
  });
}

function setupMobileMenuToggle() {
  const toggleBtn = document.getElementById("mobile-toggle");
  if (toggleBtn) {
    const menus = document.querySelectorAll(".nav-menu");
    toggleBtn.addEventListener("click", () => {
      menus.forEach(menu => menu.classList.toggle("active"));
    });
  }
}

function modelImage() {
  // Modal image viewer
  document.querySelectorAll('.zoomable-image').forEach(img => {
    img.addEventListener('click', function () {
      const modal = document.getElementById("imageModal");
      const modalImg = document.getElementById("modalImg");
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });

  document.querySelector('.close-modal').addEventListener('click', function () {
    document.getElementById("imageModal").style.display = "none";
  });

}

function initPageScripts() {
  handleHeaderScroll();
  initIntersectionObserver();
  smoothAnchorScroll();
  setupToggleMoreButtons();
  fadeInElementsOnLoad();
  setupMobileMenuToggle();
  modelImage();
}

document.addEventListener("DOMContentLoaded", initPageScripts);
