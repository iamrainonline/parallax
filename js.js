let cer = document.getElementById("cer");
let deal = document.getElementById("deal");
let fata = document.getElementById("fata");
let piatra = document.getElementById("piatra");
let text = document.getElementById("text");

window.addEventListener("scroll", () => {
  var value = window.scrollY;
  piatra.style.bottom = value * 0.001 - 50 - +"px";
  fata.style.bottom = value * 0.05 - 50 + "px";
  deal.style.top = value * 0.5 + "px";
  // cer.style.top = value * 1 + "px";
  text.style.fontSize = 160 - value * 0.8 + "px";
});
