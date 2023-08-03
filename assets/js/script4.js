let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let d = document.querySelector("#d");
let e = document.querySelector("#e");

const cambiarColor = (color) => {
  color.target.style.backgroundColor = "black";
};

a.addEventListener("click", cambiarColor);
b.addEventListener("click", cambiarColor);
c.addEventListener("click", cambiarColor);
d.addEventListener("click", cambiarColor);

function crearNuevoDiv(color) {
  const nuevoDiv = document.createElement("div");
  nuevoDiv.style.width = "200px";
  nuevoDiv.style.height = "200px";
  nuevoDiv.style.background = color;
  document.body.appendChild(nuevoDiv);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    e.style.backgroundColor = "purple";
  } else if (event.key === "s") {
    e.style.backgroundColor = "gray";
  } else if (event.key === "d") {
    e.style.backgroundColor = "pink";
  } else if (event.key === "q") {
    crearNuevoDiv("rgb(77, 170, 224)");
  } else if (event.key === "w") {
    crearNuevoDiv("orange");
  } else if (event.key === "e") {
    crearNuevoDiv("brown");
  }
});
//document.querySelector("#colorUsuario").style.backgroundColor = color.value;
