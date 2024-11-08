onload = () =>{
    document.body.classList.remove("container");
};

// main.js

// main.js

document.addEventListener('DOMContentLoaded', () => {
    const contadorEnlace = document.getElementById('enlace');
    const fechaObjetivo = new Date('2024-11-30T00:00:00').getTime();

    function actualizarContador() {
        const ahora = new Date().getTime();
        const distancia = fechaObjetivo - ahora;

        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60)) / (1000 * 60));
        const segundos = Math.floor((distancia % (1000)) / 1000);

        contadorEnlace.innerText = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

        if (distancia < 0) {
            clearInterval(intervalo);
            contadorEnlace.innerText = "¡Es el día del regalo!";
            contadorEnlace.href = "regalo.html";
        }
    }

    const intervalo = setInterval(actualizarContador, 1000);

    const regaloCheckbox = document.querySelector("#click");

    const fechaCumple = new Date("2024-11-8T00:00:00").getTime();

    function verificarFecha() {
        const ahora = new Date().getTime();
        if (ahora >= fechaCumple) {
            regaloCheckbox.disabled = false;
            console.log("Checkbox habilitado");
        } else {
            regaloCheckbox.disabled = true;
            console.log("Checkbox deshabilitado");
        }
    }

    verificarFecha();
    setInterval(verificarFecha, 1000);
});
