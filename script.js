const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const form = document.querySelector("#form");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputMessage = document.getElementById("message");
const numero = "+22870684925";

const sendToWhatsApp = (_name, _email, _message, _numero) => {
  const fullMessage = `Nom: ${_name} \n Email: ${_email} \n Message: ${_message}`;
  const encodageMessage = encodeURIComponent(fullMessage);
  const urlWhatsApp = `https://wa.me/${numero}?text=${encodageMessage}`;

  window.open(urlWhatsApp, "_blank");
};
menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Optionnel : fermer le menu quand on clique sur un lien
const menuLinks = document.querySelectorAll("#mobile-menu a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

form.addEventListener("submit", (e) => {
  console.log("submit");
  let name = inputName.value;
  let email = inputEmail.value;
  let message = inputMessage.value;
  sendToWhatsApp(name, email, message, numero);
  inputName.value = "";
  inputEmail.value = "";
  inputMessage.value = "";
});
