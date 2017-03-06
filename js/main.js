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
