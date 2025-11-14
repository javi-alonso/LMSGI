# Examen — Creación de la web MMStore

Este examen consiste en recrear y completar la web del proyecto (página principal + página detalle). A continuación tienes instrucciones paso a paso que el alumno debe seguir y los criterios por los que se evaluará.

## Objetivo
Crear una web estática completa (HTML + CSS + assets) que reproduzca la estructura y comportamiento del proyecto proporcionado. Debe ser responsiva, accesible y semántica. Se evaluará el código, diseño, accesibilidad, y calidad del entregable.

---

## Entregables obligatorios
- Carpeta del proyecto con los siguientes archivos mínimos:
  - `index.html` (página principal)
  - `detail.html` (página detalle del producto)
  - `styles.css` (estilos generales)
  - `detail.css` (estilos para la página detalle o estilos específicos)
  - `assets/` (carpeta con imágenes usadas en la web)
  - `README.md` (instrucciones para ver y desplegar la web)
- Opcional: `firebase.json` u otro archivo de configuración si desplegáis.

---

## Cómo entregar
1. Subir el proyecto a un repositorio Git (GitHub, GitLab, Bitbucket) y compartir enlace.
2. O bien, crear un ZIP con la estructura de carpetas y subirlo según instrucciones del profesor.
3. Añadir en `README.md` cómo ejecutar la web localmente (ej.: `python -m http.server`), pantallas necesarias y notas sobre decisiones tomadas.

---

## Requisitos funcionales (paso a paso para implementar)

A continuación se detallan los pasos concretos para construir la web. Implementa cada paso y marca en tu checklist.

### 1) Estructura base del proyecto
- Crea la estructura de carpetas indicada en "Entregables obligatorios".
- Asegúrate de que `index.html` enlaza a `styles.css` y `detail.html` a `detail.css` (o ambos a `styles.css` si prefieres un único CSS).
- Coloca las imágenes en `assets/` y usa rutas relativas correctas.

### 2) Página principal (`index.html`)
Implementa las siguientes secciones en este orden, usando HTML semántico:

- Header
  - Logo (enlace a la raíz `./` o `index.html`).
  - Navegación principal con al menos dos enlaces (ej.: Ofertas flash, Sobre nosotros).
  - Asegúrate de que los enlaces sean accesibles (texto visible y `href` correcto).

- Banner principal
  - Título grande y subtítulo.
  - Un botón de llamada a la acción que enlace a la sección de ofertas (`#ofertas` o similar).
  - Usa un fondo con gradiente CSS y texto contrastado.

- Productos destacados (Ofertas flash)
  - Grid responsivo con al menos 3 tarjetas de producto.
  - Cada tarjeta incluye: imagen, título, precio y enlace a `detail.html`.
  - Añade una tarjeta con una etiqueta (badge) tipo "NUEVO" sobrepuesta.

- Ofertas / Categorías (sección de cards)
  - Muestra varias tarjetas de categoría con imagen y título.
  - Cada card debe ser un enlace (`<a>`) conteniendo un `<article>` o similar.

- Footer
  - Texto con derechos de autor y estilo visible.

### 3) Página detalle (`detail.html`)
Implementa las siguientes partes:

- Header (mismo que en `index.html` para consistencia).

- Sección de detalle del producto
  - Contenedor central con dos columnas en pantallas grandes: imagen y panel de información.
  - Imagen grande del producto (usa `object-fit` y `border-radius`).
  - Panel de información con:
    - `h1` con el nombre del producto.
    - Precio destacado (`.precio-detalle`).
    - Párrafo de descripción breve.
    - Lista de especificaciones (lista sin viñetas visuales, estilo caja para cada ítem).
    - Botón de compra (`.btn-comprar`).

- Footer (igual que en `index.html`).

### 4) Estilos y diseño (CSS)
- Mobile-first: escribe estilos base para móviles y añade un breakpoint para pantallas grandes con `@media (min-width: 768px)`.
- Usa `:root` para variables de color y reutilízalas (ej.: `--btn-bg`, `--banner-color1`).
- Emplea Grid para `.productos-grid` y Flexbox para el contenedor del detalle.
- Botones con estados `:hover` y `:focus` (transiciones suaves).
- Sombreados sutiles (`box-shadow`) y `border-radius` para tarjetas.
- Asegura separación con `gap`, `padding` y `margin` adecuados.

### 5) Accesibilidad
- Todas las imágenes deben tener `alt` descriptivo.
- El contraste entre texto y fondo debe cumplir al menos AA (usar colores oscuros para texto sobre fondo claro o viceversa).
- Elementos interactivos (`a`, `button`) deben ser accesibles por teclado (outline visible en `:focus`).
- Uso correcto de elementos semánticos: `header`, `nav`, `main`/`section`, `article`, `footer`.
- Evitar `onclick` sin soporte de teclado; preferir enlaces o `button`.

### 6) Buenas prácticas y semántica
- HTML organizado, con indentación y comentarios mínimos donde haga falta.
- Evitar `div` innecesarios: usa etiquetas semánticas cuando aplique.
- Nombres de clases BEM-like o consistentes (no obligatorio BEM, pero sí coherencia).
- Evitar dependencias externas innecesarias (frameworks) a menos que se solicite.

---

## Lista de comprobación (Checklist para el alumno)
Marca cada punto antes de entregar:
- [ ] `index.html` existe y se visualiza correctamente.
- [ ] `detail.html` existe y muestra el detalle del producto.
- [ ] CSS aplicado y responsive (móvil y escritorio comprobado).
- [ ] Todas las imágenes en `assets/` y con `alt` correcto.
- [ ] Navegación funcional entre páginas.
- [ ] Tests básicos de accesibilidad manual realizados (foco, teclado, contraste).
- [ ] `README.md` con instrucciones de ejecución y decisiones tomadas.
- [ ] Proyecto subido a repo o entregado como ZIP.

---

## Criterios de evaluación y rúbrica (100 puntos total)
Distribución sugerida de la puntuación:

- Estructura y semántica HTML — 20 puntos
  - Uso correcto de etiquetas semánticas, estructura lógica y código limpio.

- Estilos y diseño CSS — 25 puntos
  - Responsive, organización de CSS, uso de variables, consistencia visual.

- Implementación funcional (enlaces, botones) — 15 puntos
  - Enlaces correctos entre `index.html` y `detail.html`, botones con estados.

- Accesibilidad — 15 puntos
  - `alt` en imágenes, foco visible, contraste, navegación por teclado.

- Creatividad y detalles visuales — 10 puntos
  - Sombras, transiciones, etiquetado (badge), pulido visual.

- Documentación y entrega — 10 puntos
  - `README.md`, instrucciones para ver localmente, repositorio o ZIP.

---

## Pautas adicionales y casos límite (edge cases)
- Qué pasa si faltan imágenes: indica en tu `README.md` qué imágenes faltan y pon `placeholder` con `alt` explicativo.
- Pantallas estrechas: comprueba que no haya contenido que salga del viewport (uso de `max-width`, `overflow-wrap`).
- Textos largos en títulos: usa `text-overflow` o line-height apropiado para que la UI no se rompa.

---

## Herramientas de validación y pruebas recomendadas
- Abrir la web localmente con: `python -m http.server 8000` y visitar `http://localhost:8000/`.
- Validación HTML/CSS: https://validator.w3.org/ y https://jigsaw.w3.org/css-validator/.
- Audits rápidos con Lighthouse (en Chrome DevTools) para revisar accesibilidad y rendimiento.

---

## Notas y recomendaciones del examinador
- Prioriza la semántica y accesibilidad sobre efectos visuales complejos.
- Comenta en el `README.md` cualquier decisión de diseño no obvia.
- Si haces mejoras adicionales (p. ej. animaciones sutiles, microinteracciones), indícalas para la parte de creatividad.

---

## Ejemplo de comandos útiles (para incluir en README)
```bash
# servir la carpeta actual en localhost:8000
python -m http.server 8000

# comprobar git status
git status

# crear zip para entregar (desde la raíz del proyecto)
zip -r MMStore-examen.zip . -x "*/.git/*"
```

---

## Resumen de lo que debe entregarse
- Proyecto completo (HTML + CSS + assets) funcionando en local.
- `README.md` con instrucciones y decisiones.
- Repo o ZIP con la estructura solicitada.

¡Buena suerte! Sigue la checklist y los criterios de la rúbrica para maximizar tu puntuación.
