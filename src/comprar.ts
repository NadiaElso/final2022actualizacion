const divImagenes = document.getElementsByClassName("image-box");

let imgArray = new Array(2);

imgArray[0].src = "yerba.jpg";

imgArray[1].src = "azucar.jpg";

for (let index = 0; index < imgArray.length; index++) {
  let imagen = document.createElement("img");
  imagen.src = imgArray[index];
  divImagenes.appendChild("img");
}
console.log(imgArray);
