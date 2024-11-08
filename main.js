onload = () =>{
    document.body.classList.remove("container");
};

// main.js

// main.js
document.getElementById("enlace").addEventListener("click", () => {
    const audio = document.getElementById("audio");
    audio.play().catch(error => {
        console.error("Error al reproducir el audio:", error);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const contadorEnlace = document.getElementById('enlace');
    const fechaObjetivo = new Date('November 30, 2024 00:00:00').getTime(); // Establece el 30 de noviembre como la fecha objetivo

    // Función para actualizar el contador
    function actualizarContador() {
        const ahora = new Date().getTime();
        const distancia = fechaObjetivo - ahora;

        if (distancia < 0) {
            // Si la cuenta regresiva ha terminado
            contadorEnlace.innerText = "¡Es el día del regalo!";
            contadorEnlace.href = "pagina-final.html"; // Redirige a la URL de la página final cuando llegue a cero
            clearInterval(intervalo); // Detiene el intervalo
        } else {
            // Calcula los días, horas, minutos y segundos restantes
            const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
            const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

            // Actualiza el texto del enlace con el tiempo restante
            contadorEnlace.innerText = `Tiempo restante: ${dias}d ${horas}h ${minutos}m ${segundos}s`;
        }
    }

    // Llama a la función actualizarContador cada segundo
    const intervalo = setInterval(actualizarContador, 1000);
});
