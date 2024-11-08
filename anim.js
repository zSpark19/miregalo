// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Ahora, ahora. Dale al play, dale al play", time: 5, duration: 3 },
  { text: "¿Eso qué hace, que está rayao?", time: 14, duration: 4},
  { text: "¡Mira, mira, mira cómo sigue!", time: 22, duration: 1 },
  { text: "He perdido sin quererlo los papeles que me diste antes de ayer", time: 24, duration: 4 },
  { text: "Donde estaban los consejos que apuntamos pa' que todo fuera bien", time: 29, duration: 4 },
  { text: "Y ahora estamos camino de la frontera", time: 34, duration: 3 },
  { text: "Disfrutando a poquitos la vida entera", time: 37, duration: 3 },
  { text: "Así que tengo que encontrarte para verte y que me digas otra vez", time: 40, duration: 4 },
  { text: "Y necesito una ayudita, una palabra que me pueda convencer", time: 45, duration: 4 },
  { text: "Y cuando me hablas la montaña es más pequeña y no se mueve cada vez", time: 51, duration: 5 },
  { text: "Que dice que cruzamos camino de la frontera", time: 57, duration: 3 },
  { text: "Disfrutando a sorbitos la luna llena", time: 60, duration: 3 },
  { text: "Cómo no voy a mojarme si aquí dentro nunca deja de llover", time: 63, duration: 3 },
  { text: "Aquí no para de llover", time: 66, duration: 3 },
  { text: "Y si seguimos con el plan establecido", time: 70, duration: 3 },
  { text: "Nos cansaremos al ratito de empezar", time: 73, duration: 2 },
  { text: "Probablemente no encontremos el camino", time: 75, duration: 3 }, 
  { text: "Pero nos sobrarán las ganas de volar", time: 78, duration: 5 },
  { text: "Nuestras ganas de volar", time: 85, duration: 6 },
  { text: "Qué fácil es perderse de la mano madre mía, ¡agárrate!", time: 91, duration: 5 },
  { text: "Que el vacío de ese vaso no se llena si no vuelves tú a querer", time: 96, duration: 5 },
  { text: "Y pasa cuando estamos camino de la frontera", time: 102, duration: 4 },
  { text: "Pobrecita, cansada, la vida queda", time: 106, duration: 3 },
  { text: "Cómo no voy a cansarla si no paro y nunca dejo de correr", time: 109 , duration: 3 },
  { text: "Y si no paro de correr", time: 112, duration: 3 },
  { text: "Improvisemos un guión definitivo", time: 115, duration: 3 },
  { text: "Que no tengamos más remedio que olvidar", time: 118, duration: 2 },
  { text: "Que hacer que todas las estrellas el camino", time: 120, duration: 3 },
  { text: "Para que nunca falten ganas de soñar", time: 123, duration: 2 },
  { text: "Y suena bien parece que nos hemos convencido", time: 125, duration: 4 },
  { text: "Sólo tenemos que perder velocidad", time: 129, duration: 2 },
  { text: "Hace ya tiempo que no estamos divididos", time: 131, duration: 4 },
  { text: "Algo sobraba cuando echamos a volar", time: 135, duration: 6 },
  { text: "Cuando echamos a volar", time: 141, duration: 7 },
  { text: "Y sé que sé que suena diferente", time: 148, duration : 3 },
  { text: "En tu futuro, en su pasado, en mi presente", time: 151, duration: 4 },
  { text: "Y hemos sobrevivido", time: 160, duration: 3 },
  { text: "Aunque no sé bien a qué", time: 163, duration: 3 },
  { text: "Y es que andábamos tan perdidos", time: 166, duration: 3 },
  { text: "Que no podíamos ver", time: 169, duration: 2 },
  { text: "La alegría que se lleva el miedo", time: 170, duration: 3 },
  { text: "Los buenos ratos, el sol de enero", time: 173, duration: 3 },
  { text: "Ver contigo cada amanecer", time: 176, duration: 4 },
  { text: "Pensando dam di dam di dam dam", time: 180, duration: 3 },
  { text: "Cuenta hasta tres empiezo yo primero", time: 183, duration: 3 },
  { text: "Que así el efecto del disparo es más certero", time: 186, duration: 2 },
  { text: "Y ya me sigues tú quitándole la prisa", time: 188, duration: 4 },
  { text: "Mirando cómo la tortuga te hipnotiza", time: 192, duration: 2 },
  { text: "Y nadie se hará el camino sin suerte", time: 194, duration: 3 },
  { text: "Que aquí lo malo en algo bueno se convierte", time: 197, duration: 3 },
  { text: "Existe un sendero y te has convencido", time: 200, duration: 3 },
  { text: "Así que empiézalo conmigo", time: 203, duration: 2 },
  { text: "Y echaremos a volar", time: 205, duration: 3 },
  { text: "Y echaremos a volar", time: 208, duration: 2 },
  { text: "Nadie se hará el camino sin suerte", time: 211, duration: 3 },
  { text: "Que aquí la pena en pedacitos se convierte", time: 214, duration: 3 },
  { text: "Guarda un mundo entero", time: 217, duration: 2 },
  { text: "Titiritero, no le hagas esperar", time: 220, duration: 5 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line, index) => time >= line.time && time <= line.time +line.duration
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);