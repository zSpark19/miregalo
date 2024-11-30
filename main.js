onload = () =>{
    document.body.classList.remove("container");
};

// main.js

// main.js

// main.js

document.addEventListener("DOMContentLoaded", () => {
    const contadorEnlace = document.getElementById("enlace");
    const boton = document.getElementById("contador-boton");
    const fechaObjetivo = new Date("November 30, 2024 00:00:00").getTime(); // Fecha objetivo

    // Función para actualizar el contador
    function actualizarContador() {
      const ahora = new Date().getTime();
      const distancia = fechaObjetivo - ahora;

      if (distancia < 0) {
        // Si la cuenta regresiva ha terminado
        contadorEnlace.innerText = "Escanea el codigo QR. Te quiero mucho";
        boton.disabled = false; // Habilita el botón
        clearInterval(intervalo); // Detiene el intervalo
      } else {
        // Calcula los días, horas, minutos y segundos restantes
        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        // Actualiza el texto del enlace con el tiempo restante
        contadorEnlace.innerText = `Tiempo restante: ${dias}d ${horas}h ${minutos}m ${segundos}s`;
        contadorEnlace.href = "#"; // Asegura que no sea clicable antes de tiempo
      }
    }

    // Llama a la función actualizarContador cada segundo
    const intervalo = setInterval(actualizarContador, 1000);

    // Asegura que el clic solo funcione si el botón no está deshabilitado
    boton.addEventListener("click", (event) => {
      if (boton.disabled) {
        event.preventDefault(); // Previene la acción si el botón está deshabilitado
      }
    });
  });
