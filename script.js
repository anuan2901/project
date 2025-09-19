// script.js
document.addEventListener("DOMContentLoaded", function() {
  // Smooth scrolling to sections
  const navLinksList = document.querySelectorAll('.nav-links a');
  navLinksList.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
document.addEventListener("DOMContentLoaded", function () {
  // Toggle menu mobile
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.innerHTML = navLinks.classList.contains("active") ? "&times;" : "&#9776;";
  });

  // Auto close setelah pilih menu di HP
  document.querySelectorAll("#nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 900) {
        navLinks.classList.remove("active");
        menuToggle.innerHTML = "&#9776;";
      }
    });
  });

  // Smooth scroll
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Form contact interaktif
  const contactForm = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      formMessage.textContent = "Terima kasih! Pesan Anda telah terkirim.";
      contactForm.reset();
      setTimeout(() => (formMessage.textContent = ""), 4000);
    });
  }

  // Newsletter interaktif
  const newsletterForm = document.getElementById("newsletter-form");
  const newsletterMsg = document.getElementById("newsletter-message");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      newsletterMsg.textContent = "Terima kasih telah berlangganan!";
      newsletterForm.reset();
      setTimeout(() => (newsletterMsg.textContent = ""), 4000);
    });
  }
});

  // Responsive navbar toggle
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.innerHTML = navLinks.classList.contains("active") ? "✖" : "☰";
    });

    // Auto close setelah pilih menu di HP
    document.querySelectorAll('#nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 900) {
          navLinks.classList.remove('active');
          menuToggle.innerHTML = "☰";
        }
      });
    });
  }

  // Handle form submission
  const form = document.querySelector('.contact form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = form.querySelector('input[type="text"]').value;
      alert(`Terima kasih, ${name}! Pesan Anda telah diterima.`);
      form.reset();
    });
  }

  // Video controls
  const videoSections = document.querySelectorAll('.video-section video');
  videoSections.forEach(video => {
    video.addEventListener('mouseover', function() {
      this.play();
    });
    video.addEventListener('mouseout', function() {
      this.pause();
    });
  });

  // Contact form interaktif
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      formMessage.textContent = "Terima kasih! Pesan Anda telah terkirim.";
      contactForm.reset();
      setTimeout(() => {
        formMessage.textContent = "";
      }, 4000);
    });
  }

  // Newsletter form interaktif
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterMsg = document.getElementById('newsletter-message');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      newsletterMsg.textContent = "Terima kasih telah berlangganan!";
      newsletterForm.reset();
      setTimeout(() => {
        newsletterMsg.textContent = "";
      }, 4000);
    });
  }
});
