//variables
const form = document.querySelector("#enviar-mail");
const fEmail = document.querySelector("#email");
const fSubject = document.querySelector("#asunto");
const fMessage = document.querySelector("#mensaje");
const btnSend = document.querySelector("#enviar");
const btnReset = document.querySelector("#resetBtn");
const inputsAll = [fEmail, fSubject, fMessage];
const validar = {
  email:
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
  asunto: /^[a-zA-z\s]+$/,
  mensaje: /^\w{10,500}$/,
};
const comprobacion = {
  email: [],
  asunto: [],
  mensaje: [],
};
loadingFun();

//Functions
function loadingFun() {
  fEmail.addEventListener("keyup", focuss);
  fSubject.addEventListener("keyup", focuss);
  fMessage.addEventListener("keyup", focuss);
  for (i of inputsAll) i.addEventListener("blur", verified);
  btnSend.addEventListener("click", sendDates);
}

function focuss(e) {
  e.preventDefault();
  let text = e.target.value;
  let fat = e.target;

  switch (fat.id) {
    case "email":
      if (!validar.email.test(text)) {
        fat.style.borderBottom = "2px solid red";
        createMens(e, "El destinario ingresado no es correcto, corrigelo");
      } else {
        fat.style.borderBottom = "2px solid green";
        comprobacion.email = true;
      }

      if (fat.parentNode.querySelector("#error-email")) {
        fat.parentNode.removeChild(fat.parentNode.children[2]);
      }
      break;

    case "asunto":
      if (!validar.asunto.test(text)) {
        fat.style.borderBottom = "2px solid red";
        createMens(
          e,
          "El asunto ingresado no debe tener caracteres especiales ni numeros, corrigelo"
        );
      } else {
        fat.style.borderBottom = "2px solid green";
        comprobacion.asunto = true;
      }

      if (fat.parentNode.querySelector("#error-asunto")) {
        fat.parentNode.removeChild(fat.parentNode.children[2]);
      }
      break;

    case "mensaje":
      if (!validar.mensaje.test(text)) {
        fat.style.borderBottom = "2px solid red";
        createMens(
          e,
          "El mensaje solo debe tener como maximo 100 caracteres, corrigelo"
        );
      } else {
        fat.style.borderBottom = "2px solid green";
        comprobacion.mensaje = true;
      }

      if (fat.parentNode.querySelector("#error-mensaje")) {
        fat.parentNode.removeChild(fat.parentNode.children[2]);
      }

      break;
  }

  if (text.length === 0) fat.style.borderBottom = "2px solid white";
}

function createMens(e, text) {
  let fat = e.target.parentNode;
  let fatFat = fat.parentNode;
  let p = document.createElement("p");
  let t = document.createTextNode(text);

  if (true) {
    p.setAttribute("id", `error-${e.target.id}`);
    p.classList.add("uppercase", "text-sm", "mt-10");
    p.appendChild(t);
    fat.appendChild(p);
  }
  if (fat.children.length > 3) fat.removeChild(fat.lastChild);

  if (e.target.value.length === 0) {
    fat.removeChild(fat.lastChild);

    if (e.type === "blur") {
      p.setAttribute("id", `error-all`);
      p.classList.add(
        "mt-4",
        "uppercase",
        "text-lg",
        "text-center",
        "text-red-600"
      );
      p.appendChild(t);
      fatFat.appendChild(p);
    }
  }

  if (e.target.value.length > 0)
    fatFat.removeChild(document.querySelector("#error-all"));

  if (e.target.type === "submit") {
    p.setAttribute("id", `correct-send`);
    p.classList.add(
      "mt-4",
      "uppercase",
      "text-xl",
      "text-green-600",
      "text-center"
    );
    p.appendChild(t);
    fatFat.appendChild(p);
  }
}

function verified(e) {
  let fat = e.target.parentNode.parentNode;

  if (!e.target.value.length > 0)
    createMens(e, "Todos los campos son obligatorios");

  if (!e.target.value.length === 0)
    fat.removeChild(fat.querySelector("#error-all"));

  if (fat.querySelector("#error-all")) fat.removeChild(fat.children[6]);

  if (
    comprobacion.asunto === true &&
    comprobacion.email === true &&
    comprobacion.mensaje === true
  ) {
    btnSend.disabled = false;
    btnSend.classList.remove("cursor-not-allowed", "opacity-50");
  }
}

function sendDates(e) {
  e.preventDefault();
  let spinner = document.querySelector("#spinner");
  let fatFat = e.target.parentNode.parentNode;
  spinner.style.display = "flex";

  setTimeout(() => {
    spinner.style.display = "none";
    createMens(e, "El correo a sido enviado con éxito!");

    setTimeout(() => {
      fatFat.removeChild(fatFat.querySelector("#correct-send"));
      form.reset();

      btnSend.disabled = true;
      btnSend.classList.add("cursor-not-allowed", "opacity-50");

      inputsAll[0].style.borderBottom = "2px solid white";
      inputsAll[1].style.borderBottom = "2px solid white";
      inputsAll[2].style.borderBottom = "2px solid white";
    }, 2300);
  }, 3000);
}

function uiInput(element) {
  if (element.value.length > 0) return;

  let label = element.parentNode.querySelector("label");
  label.classList.toggle("active");
  element.classList.toggle("border-indigo-500");
}

form.addEventListener("click", (e) => {
  let element = e.target;

  if (element.nodeName === "INPUT") {
    console.dir(element);
    uiInput(element);
    element.addEventListener("blur", () => uiInput(element));
  }
});
