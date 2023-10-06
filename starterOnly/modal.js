
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");

// Listener au click de l'Ouverture de la modal Formulaire
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Listener au click de la Fermeture de la modal Formulaire
modalCloseBtn.addEventListener("click", closeModal);


// fonction du lancement de la modal
function launchModal() {
  modalbg.style.display = "block";
  confirmModal.style.display= "none"
  form.style.display= "block"
}
// fonction de la fermeture de la modal
function closeModal() {
  modalbg.style.display = "none";
}

// fonction pour passer la nav en responsive ou non 
function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}