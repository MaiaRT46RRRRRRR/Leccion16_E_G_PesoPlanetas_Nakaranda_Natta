var boton = document.getElementById('enviar');
var resultados = document.getElementById('resultado');
boton.onclick = function (){
  var nombre = document.getElementById('nombre').value;
  var numero1 = document.getElementById('num1').value;
  var operacion = document.getElementById('operacion').value;
  resultados.innerHTML = "Hola " + nombre + " tu peso en "+ operacion + " es : "+ (operaciones(operacion, numero1)).toFixed(2) +" Kg";

  }

  function operaciones(opcion, num1) {
    var resultado;
    switch (opcion) {
      case "Mercurio":
        resultado =mercurio(num1);
        break;
      case "Jupiter":
        resultado = jupiter(num1);
        break;
      case "Marte":
        resultado = marte(num1);
        break;
      case "Venus":
        resultado = venus(num1);
        break;
      case "Pluton":
        resultado = pluton(num1);
        break;
      case "Saturno":
        resultado =saturno(num1);
        break;
      case "Urano":
        resultado = urano(num1);
        break;
      case "Neptuno":
        resultado = neptuno(num1);
        break;
      case "Luna":
        resultado = luna(num1);
        break;
      case "Sol":
        resultado = sol(num1);
        break;
      default:
        resultado = "No se ha elegido una operación";
    }
    return resultado;
  }
  //Declaracion de funciones para cada operación matemática
function mercurio(n1){
  return ((n1/9.8)*3.7);
}
function jupiter(n1){
return ((n1/9.8)*23.12);
}
function marte(n1){
return ((n1/9.8)*3.71);
}
function venus(n1){
return ((n1/9.8)*9,87);
}
function pluton(n1){
return ((n1/9.8)*0.81);
}
function saturno(n1){
return ((n1/9.8)*8.96);
}
function urano(n1){
return ((n1/9.8)*8.69);
}
function neptuno(n1){
return ((n1/9.8)*11);
}
function luna(n1){
return ((n1/9.8)*1.622);
}
function sol(n1){
return ((n1/9.8)*3.711);
}
