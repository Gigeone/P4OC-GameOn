const form = document.querySelector("form")
const baliseFirst = document.getElementById("first")
const baliseLast = document.getElementById("last")
const baliseEmail = document.getElementById("email")
const baliseBirthDate = document.getElementById("birthdate")
const baliseQuantity = document.getElementById("quantity")
// const baliseLocation = document.querySelectorAll('input[name="location"]')
const baliseLocation = document.getElementById("location1")
const baliseAcceptedCheckbox = document.getElementById("checkbox1")

// ecoute de l'input pour savoir si le champs est invalid
baliseFirst.addEventListener("invalid", (event) => flashErrorMessage (event, "Veuillez entrer 2 caractères ou plus pour le champ du nom." ));
baliseLast.addEventListener("invalid", (event) => flashErrorMessage (event, "Veuillez entrer 2 caractères ou plus pour le champ du nom." ));
baliseEmail.addEventListener("invalid", (event) => flashErrorMessage (event, "Veuillez entrer une adresse mail valide" ));
baliseBirthDate.addEventListener("invalid", (event) => flashErrorMessage (event, "Vous devez entrer votre date de naissance." ));
baliseQuantity.addEventListener("invalid", (event) => flashErrorMessage (event, "Veuillez saisir un chiffre entre 0 et 99" ));
baliseLocation.addEventListener("invalid", (event) => flashErrorMessage (event, "Vous devez choisir une option." ));
baliseAcceptedCheckbox.addEventListener("invalid", (event) => flashErrorMessage (event, "Vous devez vérifier que vous acceptez les termes et conditions." ));


form.addEventListener("submit", handleSubmit);

// test console pour s'assurer que l'élément est invalid
baliseFirst.addEventListener("invalid",(event) => {
    console.log (event) 
})


function flashErrorMessage(event,message) {
    const target = event.target;
    // console.log (target)
    const parent = target.parentElement;
    // console.log (parent)
    parent.setAttribute("data-error", message)
    parent.setAttribute("data-error-visible", "true");
    setTimeout(removeErrorMessages, 10000);
}

function removeErrorMessages() {
    const errorMessages = document.querySelectorAll("[data-error]");
    errorMessages.forEach((errorMessage) => {
      errorMessage.removeAttribute("data-error-visible");
    });
}

function handleSubmit(event) {
    event.preventDefault();
    console.log(form.checkValidity())
    if (form.checkValidity()) {
    console.log("true")
      closeModal();
      alert("Merci ! Votre réservation a été reçue.");
    }
  }


