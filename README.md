
# LMSGI — Ejemplos prácticos HTML5 y CSS

Breve descripción

Colección de pequeñas demos didácticas para practicar técnicas de layout y CSS: Flexbox, Media Queries, Positioning y Grid.

Índice

- [Flexbox](#flexbox)
- [Media Queries](#media-queries)
- [Positioning](#positioning)
- [Grid](#grid)

Proyectos

## Flexbox
Demostraciones básicas de layout con Flexbox. Vista rápida: https://htmlpreview.github.io/?https://raw.githubusercontent.com/javi-alonso/LMSGI/refs/heads/main/03-flexbox/index.html

## Media Queries
Ejemplos de `@media` para pantalla e impresión. Vista rápida: https://htmlpreview.github.io/?https://raw.githubusercontent.com/javi-alonso/LMSGI/refs/heads/main/02-media-query/index.html

## Positioning
Ejemplos de `position` (absolute, relative, fixed, sticky), `float` y `z-index`. Vista rápida: https://htmlpreview.github.io/?https://raw.githubusercontent.com/javi-alonso/LMSGI/refs/heads/main/01-positioning/index.html

## Grid
Colección de ejemplos de CSS Grid (áreas, repeat, auto-fit). Vista rápida: https://htmlpreview.github.io/?https://raw.githubusercontent.com/javi-alonso/LMSGI/refs/heads/main/04-grid/index.html


## Grid vs Flexbox

Grid: https://htmlpreview.github.io/?https://raw.githubusercontent.com/javi-alonso/LMSGI/refs/heads/main/05-grid-vs-flex/grid.html
Flex: https://htmlpreview.github.io/?https://raw.githubusercontent.com/javi-alonso/LMSGI/refs/heads/main/05-grid-vs-flex/flex.html

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


## Abrir en VS Code online

En la página del repositorio en GitHub puedes pulsar la tecla `.` (punto) para abrir una versión en línea de Visual Studio Code (github.dev / VS Code for the Web). Esto permite ver y editar los archivos desde el navegador sin clonar el repositorio —muy útil para revisar o probar ejemplos rápidamente.

## Vista previa HTML sin descargar

Si solo quieres ver una página HTML sin descargar el repositorio, puedes usar htmlpreview.github.io con la URL RAW del archivo en GitHub. Usa la plantilla siguiente y cambia la ruta final por la del archivo que quieras previsualizar:

```
https://htmlpreview.github.io/?https://raw.githubusercontent.com/javi-alonso/LMSGI/refs/heads/main/05-grid-vs-flex/flex.html
```
