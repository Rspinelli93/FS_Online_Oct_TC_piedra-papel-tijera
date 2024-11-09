
const buttons = document.querySelectorAll(".boton-jugada");

const divResultado = document.getElementById('resultados');

const pUsuario = document.getElementById('contador-usuario');
const pPc = document.getElementById('contador-ordenador');

let puntosPc = 0;
let puntosUsuario = 0;

buttons.forEach(button => {
  button.addEventListener("click", () => {

    const jugada = button.dataset.jugada;
    
    
    switch (jugada) {
    case "piedra":
    divResultado.innerHTML = "<p>Elección Usuario: Piedra</p>";
    break;
    case "papel":
    divResultado.innerHTML = "<p>Elección Usuario: Papel</p>";
    break;
    case "tijera":
    divResultado.innerHTML = "<p>Elección Usuario: Tijera</p>";
    break;
    }


      const jugadaAle = Math.floor(Math.random() * 3)

    function jugadaPc() {
      
      
    switch (jugadaAle) {
    case 0:
    divResultado.innerHTML += "<p>Elección PC: Piedra</p>";
    break;
    case 1:
      divResultado.innerHTML += "<p>Elección PC: Papel</p>";
    break;
    case 2:
      divResultado.innerHTML += "<p>Elección PC: Tijera</p>";
    break;
}
    }
jugadaPc()


switch (true) {
    case (jugada == "piedra" && jugadaAle == 0):
    divResultado.innerHTML += "<p>Han Empatado</p>";
    break;
    case (jugada == "papel" && jugadaAle == 1):
    divResultado.innerHTML += "<p>Han Empatado</p>";
    break;
    case (jugada == "tijera" && jugadaAle == 2):
    divResultado.innerHTML += "<p>Han Empatado</p>";
    break;


    case (jugada == "piedra" && jugadaAle == 2):
    divResultado.innerHTML += "<p>Gana el Usuario</p>";
    puntosUsuario += 1;
    pUsuario.innerText = `Usuario Tiene: ${puntosUsuario} puntos`;
    console.log(puntosUsuario);
    break;
    case (jugada == "papel" && jugadaAle == 0):
    divResultado.innerHTML += "<p>Gana el Usuario</p>";
    puntosUsuario += 1;
    pUsuario.innerText = `Usuario Tiene: ${puntosUsuario} puntos`;
    break;
    case (jugada == "tijera" && jugadaAle == 1):
    divResultado.innerHTML += "<p>Gana el Usuario</p>";
    puntosUsuario += 1;
    pUsuario.innerText = `Usuario Tiene: ${puntosUsuario} puntos`;
    break;

    default:
    divResultado.innerHTML += "<p>Gana la PC</p>";
    puntosPc += 1;
    pPc.innerText = `La PC Tiene: ${puntosPc} puntos`;
    break;
}
});
});


