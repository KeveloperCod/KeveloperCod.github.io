setTimeout(function () {
	const message = document.getElementById("result");
	message.innerHTML =
		"Kiara Zavaleta Montañez, gracias por darle sentido a muchas cosas en mi vida , te mando un abrazo... que tengas un lindo dia. ";
}, 6200);

setTimeout(function () {
	const message = document.getElementById("state-message");
	const reloadButton = document.getElementById("reload-button");
	reloadButton.style.display = "inline-block";
	message.innerHTML = "&nbsp;";
}, 6000);

function reloadMessage() {
	const message = document.getElementById("result");
	const stateMessage = document.getElementById("state-message");
	const loadingBox = document.querySelector(".loading-box");
	const reloadButton = document.getElementById("reload-button");

	// Ocultamos el botón durante la recarga
	reloadButton.style.display = "none";

	// Cambia el mensaje y muestra el estado de carga
	message.innerHTML = "&nbsp;";
	stateMessage.innerHTML = "cargando...";

	const newLoadingBox = loadingBox.cloneNode(true);
	loadingBox.parentNode.replaceChild(newLoadingBox, loadingBox);

	// Simula una carga después de 2 segundos (puedes ajustar este tiempo)
	setTimeout(function () {
		message.innerHTML = " Y no olvides que te quiero mucho ♥ .";
		stateMessage.innerHTML = "&nbsp;";
		reloadButton.style.display = "inline-block";

		// Agrega un tercer mensaje después de 3 segundos, solo si se presionó el botón
		reloadButton.addEventListener("click", function () {
			setTimeout(function () {
				message.innerHTML = "¡mucho!♥";
				// Modifica el evento del botón para redirigir al inicio
				reloadButton.removeEventListener("click", reloadMessage);
				reloadButton.addEventListener("click", function () {
					window.location.reload(); // Esto recargará la página, volviendo al mensaje inicial
				});
			}, 5000);
		});
	}, 5000);
}

//------------------------- ---------------------------------
/*
function reloadMessage1() {
	const message = document.getElementById("result");
	const stateMessage = document.getElementById("state-message");
	const loadingBox = document.querySelector(".loading-box");
	const reloadButton = document.getElementById("reload-button");

	// Ocultamos el botón durante la recarga
	reloadButton.style.display = "none";

	// Cambia el mensaje y muestra el estado de carga
	message.innerHTML = "&nbsp;";
	stateMessage.innerHTML = "cargando...";

	const newLoadingBox = loadingBox.cloneNode(true);
	loadingBox.parentNode.replaceChild(newLoadingBox, loadingBox);

	// Simula una carga después de 2 segundos (puedes ajustar este tiempo)
	setTimeout(function () {
		message.innerHTML = "  mucho ♥ .";
		stateMessage.innerHTML = "&nbsp;";
		reloadButton.style.display = "inline-block";
	}, 5000);
}
*/

/*------ configuracion del video -----*/

document.addEventListener("DOMContentLoaded", function () {
	const video = document.querySelector("video");

	// Función para reiniciar el video
	function restartVideo() {
		video.currentTime = 0;
		video.play();
	}

	// Configuración de intervalo para reiniciar el video cada 5 minutos
	setInterval(restartVideo, 3000); // 300000 milisegundos = 5 minutos

	// Inicia el video automáticamente
	video.play();
});
