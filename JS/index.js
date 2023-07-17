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


const allPortfolioBtn = document.querySelector(".portfolio-all-img");
const webPortfolioBtn = document.querySelector(".filter-web");
const appPortfolioBtn = document.querySelector(".filter-app");
const cardPortfolioBtn = document.querySelector(".filter-card");

const filterAppItem = document.querySelectorAll('.filter-app-item')
const filterWebItem = document.querySelectorAll('.filter-web-item')
const filterCardItem = document.querySelectorAll('.filter-card-item')
console.log(filterAppItem);

const portfolioContent = document.querySelector(".portfolio-content");

webPortfolioBtn.addEventListener('click', function (e){
  e.preventDefault()
  filterAppItem[0].classList.add('hidden');
  filterAppItem[1].classList.add('hidden');
  filterAppItem[2].classList.add('hidden');
  filterCardItem[0].classList.add('hidden');
  filterCardItem[1].classList.add('hidden');
  filterCardItem[2].classList.add('hidden');
  console.log(e);
})

appPortfolioBtn.addEventListener("click", function (e) {
  e.preventDefault();
  filterWebItem[0].classList.add("hidden");
  filterWebItem[1].classList.add("hidden");
  filterWebItem[2].classList.add("hidden");
  filterCardItem[0].classList.add("hidden");
  filterCardItem[1].classList.add("hidden");
  filterCardItem[2].classList.add("hidden");
  filterAppItem[0].classList.remove("hidden");
  filterAppItem[1].classList.remove("hidden");
  filterAppItem[2].classList.remove("hidden");
  console.log(e);
});

cardPortfolioBtn.addEventListener("click", function (e) {
  e.preventDefault();
  filterWebItem[0].classList.add("hidden");
  filterWebItem[1].classList.add("hidden");
  filterWebItem[2].classList.add("hidden");
  filterAppItem[0].classList.add("hidden");
  filterAppItem[1].classList.add("hidden");
  filterAppItem[2].classList.add("hidden");
  filterCardItem[0].classList.remove("hidden");
  filterCardItem[1].classList.remove("hidden");
  filterCardItem[2].classList.remove("hidden");
  console.log(e);
});

allPortfolioBtn.addEventListener("click", function (e) {
  e.preventDefault();
  filterWebItem[0].classList.remove("hidden");
  filterWebItem[1].classList.remove("hidden");
  filterWebItem[2].classList.remove("hidden");
  filterAppItem[0].classList.remove("hidden");
  filterAppItem[1].classList.remove("hidden");
  filterAppItem[2].classList.remove("hidden");
  filterCardItem[0].classList.remove("hidden");
  filterCardItem[1].classList.remove("hidden");
  filterCardItem[2].classList.remove("hidden");
  console.log(e);
});

