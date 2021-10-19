function setup() {
  createCanvas(400, 400);
  
  //Tipo de dato string
  name = "Hermoine";
  
  //Tipo de dato número.
  num = 31;
  
  //Tipo de dato matriz-array.
  newArray = ["Item1", 32, name, num];
  
  //Accesar al primer artículo en el array e imprimiéndolo en la consola.
  console.log(newArray[0]);
  
  //Accesar al tercer artículo en el array e imprimiéndolo en la consola.
  console.log(newArray[2]);

  //Encontrar el largo del array.
  console.log(newArray.length);

}

function draw() {
  background(220);
  
}