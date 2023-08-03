// Récupération de l'élément <p>
const paragraph = document.querySelector(".main__content");

paragraph.innerHTML = paragraph.textContent.replace(/./g, "<span>$&</span>");

// Récupération des éléments <span> créés
let spans = document.querySelectorAll(".main__content span");

for (let i = 0; i < spans.length; i++) {
  // créations des variables left et top
  let left = innerWidth * Math.random();
  let top = innerHeight * Math.random();

  if (Math.random() < 0.5) {
    spans[i].style.left = "-" + left + "px";
  } else {
    spans[i].style.left = left + "px";
  }
  if (Math.random() < 0.5) {
    spans[i].style.top = "-" + top + "px";
  } else {
    spans[i].style.top = top + "px";
  }
}
