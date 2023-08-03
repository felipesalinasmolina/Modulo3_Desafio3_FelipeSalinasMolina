//EJERCICIO 3.2

let ele = document.getElementById("ele1");

function pintar3_2() {
  ele.style.backgroundColor = "yellow";
}

ele.addEventListener("click", pintar3_2);

//EJERCICIO 3.3

let ele1 = document.getElementById("ele2");

function pintar3_3(color) {
  ele.style.backgroundColor = color;
}
ele1.addEventListener("click", pintar3_3("yellow"));
