// JavaScript Document

// Año automático en footer
document.getElementById("year").textContent = new Date().getFullYear();

// Manejo del formulario
const form = document.getElementById("reservaForm");
const alertBox = document.getElementById("formAlert");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  alertBox.classList.add("d-none");
  alertBox.textContent = "";

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const fecha = document.getElementById("fecha").value.trim();
  const personas = document.getElementById("personas").value.trim();

  if (!nombre || !email || !fecha || !personas) {
    alertBox.textContent = "Por favor completa todos los campos.";
    alertBox.classList.remove("d-none");
    return;
  }

  if (!email.includes("@")) {
    alertBox.textContent = "Ingresa un correo electrónico válido.";
    alertBox.classList.remove("d-none");
    return;
  }

  // Mostrar modal de éxito
  const modal = new bootstrap.Modal(document.getElementById("successModal"));
  modal.show();

  form.reset();
});

