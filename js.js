let cer = document.getElementById("cer");
let deal = document.getElementById("deal");
let fata = document.getElementById("fata");
let piatra = document.getElementById("piatra");
let text = document.getElementById("text");
let navbar = document.getElementById("navbar");
let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");
// const bottom = 70;

window.addEventListener("scroll", () => {
  var value = Math.floor(window.scrollY);
  console.log(value);
  piatra.style.bottom = value * 0.2 + "px";
  fata.style.bottom = value * 0.2 + "px";

  cer.style.bottom = -value * 0.5 + "px";
  text.style.top = 200 + value * 1 + "px";
  text.style.fontSize = 50 + value * 0.1 + "px";

  deal.style.bottom = value * 0.4 + "px";

  var x = (cer.style.filter = `grayscale(${value}%)`);
  deal.style.filter = ` grayscale(${value}%)`;
  piatra.style.filter = `grayscale(${value}%)`;

  if (value >= 360) {
    deal.style.bottom = 140 + "px";
  }
  if (value >= 40) {
    deal.style.filter = ` grayscale(40%)`;
    piatra.style.filter = ` grayscale(40%)`;
  }
  if (value > 100) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
  if (value > 400) {
    text.style.display = "none";
  } else {
    text.style.display = "block";
  }
  if (value > 550) {
    section2.classList.add("section-square-anim");
  } else {
    section2.classList.remove("section-square-anim");
  }
});

const fullWidth = () => {
  setTimeout(() => {
    section1.classList.add("fullWidth");
  }, 1000);
};

fullWidth();
