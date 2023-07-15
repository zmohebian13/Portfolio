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
