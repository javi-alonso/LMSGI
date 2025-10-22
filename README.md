# Ejemplos prácticos HTML5 y CSS (Flexbox, Media Queries, Positioning)

Este repositorio contiene páginas de práctica para aprender HTML5 y CSS, enfocadas en:

- Flexbox (diseño flexible)
- Media Queries (screen / print)
- Técnicas de posicionamiento (absolute, relative, fixed, sticky, float) y z-index

Estructura del proyecto

- `flexbox/`
	- `index.html` — Ejemplos de propiedades de Flexbox (justify-content, align-items, flex-direction, flex-wrap, order, flex-grow, align-self). Cada ejemplo contiene cajas con el texto `párrafo`.
	- `styles.css` — Estilos base y ejemplos responsive.

- `MediaQuery/` (puede aparecer como `media-query/` según cómo se haya guardado)
	- `index.html` — Ejemplos de `@media screen` (breakpoints, orientation) y `@media print` (estilos para impresión).
	- `styles.css` — Estilos mobile-first y reglas para `screen` y `print`.

- `Positioning/`
	- `index.html` — Ejemplos de `position: relative/absolute`, `position: fixed`, `position: sticky`, `float` y `z-index`.
	- `styles.css` — Estilos que muestran las diferencias y demos con superposición.

Cómo abrir las demos (macOS, zsh)

```bash
open ./LMSGI/flexbox/index.html
open ./LMSGI/MediaQuery/index.html
open ./LMSGI/Positioning/index.html
```

Qué observar

- Flexbox: redimensiona la ventana y usa el menú para saltar entre los ejemplos. Observa la diferencia entre `justify-content` y `align-items` y el comportamiento de `flex-direction` y `flex-wrap`.
- MediaQuery: usa las herramientas de desarrollador para emular dispositivos o cambia el tamaño de la ventana; para `print` usa la vista previa de impresión (Cmd+P) y comprueba cómo cambian los estilos.
- Positioning: desplázate para ver `fixed` y `sticky`, observa cajas colocadas con `absolute` dentro de un contenedor relativo, y usa hover sobre los stacks para ver cómo cambia `z-index`.

Mejoras sugeridas

- Añadir comentarios explicativos en los archivos HTML/CSS para uso didáctico.
- Añadir un panel interactivo (pequeño JS) para cambiar propiedades en tiempo real (por ejemplo `justify-content`, `z-index`).
- Añadir una carpeta `exercises/` con ejercicios y soluciones.

Si quieres, puedo añadir cualquiera de las mejoras anteriores: indícame cuál prefieres y la implemento.