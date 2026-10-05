ESCAPA DE LA BASE ANUNNAKI — PARALOGIA
=========================================

Archivos del juego:
- index.html
- style.css
- game.js

Características:
- 3D en primera persona.
- Español e inglés.
- Base/laberinto de 17x17 sectores con iluminación, niebla y partículas.
- 3 núcleos de energía para encontrar.
- Guardián enemigo que persigue al jugador usando rutas del laberinto.
- Portal final bloqueado hasta completar el objetivo.
- Linterna, sprint, pausa, cronómetro y sonido sintético.
- No requiere imágenes, modelos ni audios externos.
- Three.js se carga desde jsDelivr cuando el juego está en Internet.

RUTA RECOMENDADA EN PARALOGIA
-----------------------------
src/gamefiles/escapa-base-anunnaki/

Para que Eleventy publique esta carpeta, agrega UNA VEZ dentro de eleventy.config.js:

eleventyConfig.addPassthroughCopy({"src/gamefiles": "juegos"});

La URL pública será:
https://paralogia.netlify.app/juegos/escapa-base-anunnaki/

En Administrador > Juegos, usa en "Ruta o enlace del juego":
/juegos/escapa-base-anunnaki/

CONTROLES
---------
WASD: moverse
Ratón: mirar
Shift: correr
F: linterna
Esc: pausa
R: reiniciar después de perder

NOTA
----
Está pensado principalmente para computadora. Requiere Internet para cargar Three.js.
