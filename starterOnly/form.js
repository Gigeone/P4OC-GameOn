// DOM Elements
const form = document.querySelector("form")
const baliseFirst = document.getElementById("first")
const baliseLast = document.getElementById("last")
const baliseEmail = document.getElementById("email")
const baliseBirthDate = document.getElementById("birthdate")
const baliseQuantity = document.getElementById("quantity")
const baliseLocation = document.getElementById("location1")
const baliseAcceptedCheckbox = document.getElementById("checkbox1")
const confirmModal = document.querySelector(".formConfirmation")
const closeConfirmModal = document.querySelector(".buttonCloseConfirmModal")

// ecoute de l'input pour savoir si le champs est invalid
baliseFirst.addEventListener("invalid", (event) => flashErrorMessage (event, "Veuillez entrer 2 caractères ou plus pour le champ du nom." ));
baliseLast.addEventListener("invalid", (event) => flashErrorMessage (event, "Veuillez entrer 2 caractères ou plus pour le champ du nom." ));
baliseQuantity.addEventListener("invalid", (event) => flashErrorMessage (event, "Veuillez saisir un chiffre entre 0 et 99" ));
baliseLocation.addEventListener("invalid", (event) => flashErrorMessage (event, "Vous devez choisir une option." ));
baliseAcceptedCheckbox.addEventListener("invalid", (event) => flashErrorMessage (event, "Vous devez vérifier que vous acceptez les termes et conditions." ));

// listener au clique sur le submit
form.addEventListener("submit", handleSubmit);

// listener sur le bouton "X" de la modale de confirmation
closeConfirmModal.addEventListener("click", handleCloseConfirmModal)

// test console pour s'assurer que l'élément est invalid
baliseFirst.addEventListener("invalid",(event) => { 
    console.log (event) 
})

// affichage des erruers quand le champs est invalide
function flashErrorMessage(event,message) {
    const target = event.target;
    // console.log (target)
    const parent = target.parentElement;
    // console.log (parent)
    parent.setAttribute("data-error", message)
    parent.setAttribute("data-error-visible", "true");
    setTimeout(removeErrorMessages, 10000);
}

// test de la validité de l'email
function testValidityEmail () {
  let email = baliseEmail.value;
  const emailRegExp = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/
  if(!email.trim().match(emailRegExp)){
    const parent = baliseEmail.parentElement;
    parent.setAttribute("data-error", "Veuillez entrer une adresse mail valide")
    parent.setAttribute("data-error-visible", "true");
    setTimeout(removeErrorMessages, 10000);
    return false
  } 
  else {
    console.log("good");
    return true  
  }
}

// fonction qui permet de supprimer les messages d'erreurs
function removeErrorMessages() {
    const errorMessages = document.querySelectorAll("[data-error]");
    errorMessages.forEach((errorMessage) => {
      errorMessage.removeAttribute("data-error-visible");
    });
}


// submit du formulaire et verification de la validité du form
function handleSubmit(event) {
    event.preventDefault(); // pour eviter le rechargement de la page au submit
    console.log(form.checkValidity());
    console.log(testValidityEmail());
    if (form.checkValidity() && testValidityEmail() ) {
      form.style.display= "none"
      confirmModal.style.display = "block";
      form.reset(); // reste du form si validé
    }
  }
// fermeture de la modal de confirmation
  function handleCloseConfirmModal () {
    closeModal()
  }


