// ===============================
// VARIABLES
// ===============================

const btnInicio = document.getElementById("btnInicio");
const inicio = document.getElementById("inicio");
const sobreSection = document.getElementById("sobreSection");
const envelope = document.getElementById("envelope");
const textoCarta = document.getElementById("textoCarta");
const music = document.getElementById("music");

// ===============================
// TEXTO DE LA CARTA
// ===============================

const mensaje = `

Mi Estrellita ✨

No sé si el universo alguna vez imaginó que dos personas pudieran coincidir de una forma tan bonita.

Solo sé que desde que llegaste a mi vida muchas cosas comenzaron a tener más sentido.

Tu sonrisa ilumina mis días,
tu forma de ser me da tranquilidad
y tu existencia hace que incluso las noches más oscuras tengan estrellas.

No importa la distancia,
el tiempo
o los obstáculos.

Siempre agradeceré por haberte conocido.

Ich liebe dich ❤️

`;

let posicion = 0;

// ===============================
// CREAR ESTRELLAS
// ===============================

function crearEstrellas() {

    const contenedor = document.getElementById("stars");

    for (let i = 0; i < 250; i++) {

        let estrella = document.createElement("div");

        estrella.classList.add("star");

        estrella.style.left = Math.random() * 100 + "%";

        estrella.style.top = Math.random() * 100 + "%";

        estrella.style.animationDelay = Math.random() * 3 + "s";

        estrella.style.opacity = Math.random();

        contenedor.appendChild(estrella);

    }

}

crearEstrellas();

// ===============================
// ESTRELLAS FUGACES
// ===============================

function estrellaFugaz() {

    const cielo = document.getElementById("shooting-stars");

    let shooting = document.createElement("div");

    shooting.classList.add("shooting");

    shooting.style.left = Math.random() * window.innerWidth + "px";

    shooting.style.top = Math.random() * 200 + "px";

    cielo.appendChild(shooting);

    setTimeout(() => {

        shooting.remove();

    }, 2000);

}

setInterval(estrellaFugaz, 5000);

// ===============================
// BOTÓN INICIAL
// ===============================

btnInicio.addEventListener("click", () => {

    inicio.classList.add("oculto");

    sobreSection.classList.remove("oculto");

});

// ===============================
// ABRIR SOBRE
// ===============================

envelope.addEventListener("click", () => {

    envelope.classList.add("abierto");

    escribirCarta();

    music.play();

});

// ===============================
// EFECTO MAQUINA DE ESCRIBIR
// ===============================

function escribirCarta() {

    if (posicion < mensaje.length) {

        textoCarta.innerHTML += mensaje.charAt(posicion);

        posicion++;

        setTimeout(escribirCarta,45);

    } else {

        // Esperar 4 segundos antes de mostrar las fotos
        setTimeout(mostrarGaleria,4000);

    }

}

// ===================================
// GALERÍA Y FINAL
// ===================================

// Obtener elementos
const galeria = document.getElementById("galeria");
const final = document.getElementById("final");
const reiniciar = document.getElementById("reiniciar");

// ===================================
// CUANDO TERMINE LA CARTA
// ===================================

function mostrarGaleria() {

    sobreSection.classList.add("oculto");

    galeria.classList.remove("oculto");

    aparecerFotos();

}

// ===================================
// APARECER FOTOS
// ===================================

function aparecerFotos() {

    const fotos = document.querySelectorAll(".photo");

    fotos.forEach((foto, index) => {

        foto.style.opacity = "0";
        foto.style.transform = "translateY(80px)";

        setTimeout(() => {

            foto.style.transition = "1s";
            foto.style.opacity = "1";
            foto.style.transform = "translateY(0)";

        }, index * 1000);

    });

    // Después de mostrar todas las fotos
    setTimeout(() => {

        mostrarFinal();

    }, fotos.length * 1000 + 3000);

}

// ===================================
// MOSTRAR PANTALLA FINAL
// ===================================

function mostrarFinal() {

    galeria.classList.add("oculto");

    final.classList.remove("oculto");

    lluviaCorazones();

}

// ===================================
// CORAZONES
// ===================================

function lluviaCorazones() {

    const contenedor = document.getElementById("heart-container");

    const intervalo = setInterval(() => {

        let corazon = document.createElement("div");

        corazon.classList.add("heart");

        corazon.innerHTML = "❤️";

        corazon.style.left = Math.random() * 100 + "%";

        corazon.style.fontSize = (20 + Math.random() * 35) + "px";

        corazon.style.bottom = "-50px";

        contenedor.appendChild(corazon);

        setTimeout(() => {

            corazon.remove();

        }, 6000);

    }, 250);

    // Detener después de 15 segundos
    setTimeout(() => {

        clearInterval(intervalo);

    }, 15000);

}

// ===================================
// REINICIAR
// ===================================

reiniciar.addEventListener("click", () => {

    location.reload();

});