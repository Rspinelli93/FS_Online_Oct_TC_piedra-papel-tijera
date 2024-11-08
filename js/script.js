
const buttons = document.querySelectorAll(".boton-jugada");

const divResultado = document.getElementById('resultados');

buttons.forEach(button => {
  button.addEventListener("click", () => {

    const jugada = button.dataset.jugada;
    
    switch (jugada) {
        case "piedra":
          divResultado.innerHTML = "<p>Elegiste Piedra</p>";
          break;
        case "papel":
            divResultado.innerHTML = "<p>Elegiste Papel</p>";
          break;
        case "tijera":
            divResultado.innerHTML = "<p>Elegiste Tijera</p>";
          break;
      }
  });
});

const randomJugada = jugadas[Math.floor(Math.random() * jugadas.length)];

