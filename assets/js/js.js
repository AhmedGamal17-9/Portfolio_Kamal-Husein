/* ===================================
   JS for Eng. Kamal Husein Portfolio
===================================== */

// ===== Menu Toggle =====
const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuIcon.classList.toggle("fa-xmark");
});


// ===== Add Dark Mode Styles Dynamically =====
const darkStyle = document.createElement("style");
darkStyle.innerHTML = `
  body.dark-mode {
    background-color: #121212;
    color: #ddd;
  }

  body.dark-mode .header {
    background-color: #1c1c1c;
    box-shadow: none;
  }

  body.dark-mode .nav-links a {
    color: #ddd;
  }

  body.dark-mode .nav-links a:hover {
    color: #7bb6f1;
  }

  body.dark-mode .primary-btn {
    background-color: #7bb6f1;
    color: #fff;
  }

  body.dark-mode .secondary-btn {
    border-color: #7bb6f1;
    color: #7bb6f1;
  }

  body.dark-mode footer {
    background-color: #1e1e1e;
  }

  body.dark-mode .portfolio-card .overlay {
    background: rgba(123,182,241,0.85);
  }

  body.dark-mode .education-block,
  body.dark-mode .flip-card-front {
    background-color: #1f1f1f;
    color: #ddd;
  }

  body.dark-mode h2 {
    color: #7bb6f1;
  }

  body.dark-mode .skills-group i {
    color: #7bb6f1;
  }
`;
document.head.appendChild(darkStyle);

// ===== Smooth Scroll for Navigation =====
document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth"
    });
    navLinks.classList.remove("active");
    menuIcon.classList.remove("fa-xmark");
  });
});

// ===== Section Fade-In Animation on Scroll =====
const sections = document.querySelectorAll(".section, .hero");

const fadeInOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("show");
    }
  });
};

window.addEventListener("scroll", fadeInOnScroll);
fadeInOnScroll();

// ===== Animation CSS (injected dynamically) =====
const fadeStyle = document.createElement("style");
fadeStyle.innerHTML = `
  .section, .hero {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s ease-out;
  }

  .section.show, .hero.show {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(fadeStyle);
