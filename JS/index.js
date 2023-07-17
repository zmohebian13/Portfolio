const typedDesc = document.querySelector(".hero-desc-typed");

let text = "Front End Developer";
let index = 0;

const typeWriter = () => {
  if (index < text.length) {
    typedDesc.innerHTML += text[index];
    index++;
  }

  setTimeout(() => {
    typeWriter();
  }, 100);
};

typeWriter();

window.addEventListener("scroll", function () {
  const backToTopBtn = document.querySelector(".back-to-top");
  if (window.scrollY > 200) {
    backToTopBtn.classList.add("active");
  } else {
    backToTopBtn.classList.remove("active");
  }
});

console.log(window.scrollY);
window.addEventListener("scroll", function () {
  const homeSection = document.querySelector("#home-navbar");
  const aboutSection = document.querySelector("#about-navbar");
  const resumeSection = document.querySelector("#resume-navbr");
  const portfolioSection = document.querySelector("#portfolio-navbar");
  const contactSection = document.querySelector("#contact-navbar");
  if (window.scrollY < 500) {
    homeSection.classList.add("active");
    aboutSection.classList.remove("active");
    resumeSection.classList.remove("active");
    portfolioSection.classList.remove("active");
  } else if (window.scrollY > 500 && window.scrollY < 1998) {
    aboutSection.classList.add("active");
    homeSection.classList.remove("active");
    resumeSection.classList.remove("active");
  } else if (window.scrollY > 1998 && window.scrollY < 2750) {
    resumeSection.classList.add("active");
    aboutSection.classList.remove("active");
    portfolioSection.classList.remove("active");
  } else if (window.scrollY > 2750 && window.scrollY < 4100) {
    portfolioSection.classList.add("active");
    homeSection.classList.remove("active");
    aboutSection.classList.remove("active");
    resumeSection.classList.remove("active");
    contactSection.classList.remove("active");
  } else if (window.scrollY > 4100 && window.scrollY < 4855) {
    contactSection.classList.add("active");
    portfolioSection.classList.remove("active");
    homeSection.classList.remove("active");
    aboutSection.classList.remove("active");
    resumeSection.classList.remove("active");
  }
});
