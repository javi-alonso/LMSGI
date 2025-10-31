// Array de recursos
const resources = [
  {
    image:"https://resources.whatwg.org/logo.svg",
    url:"https://whatwg.org/",
    description:"Maintaining and evolving HTML since 2004"
  },
  {
    image:"https://www.w3.org/assets/logos/w3c-2025/svg/w3c.svg",
    url:"https://www.w3.org/",
    description:"The World Wide Web Consortium (W3C) develops standards and guidelines to help everyone build a web based on the principles of accessibility, internationalization, privacy and security."
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwd68ziRiidnX_LO0dbXnx0eGf7wavbN4K2w&s",
    url:"https://developer.mozilla.org/es/",
    description:"Resources for Developers, by Developers"
  },
  {
    image: "https://cdn.wallpapersafari.com/78/81/b9Mht2.jpg",
    url: "https://www.bentogridgenerator.com/",
    description:
      "Create custom bento grids easily and export them as HTML+CSS or HTML+Tailwind.",
  },
  {
    image: "https://uigradients.com/static/images/uigradients.jpg",
    url: "https://uigradients.com/",
    description:
      "Colección visual de gradientes CSS listos para usar, con nombres inspiradores y código generado automáticamente.",
  },
  {
    image:"https://assets.awwwards.com/awards/external/2017/05/5912d04675fe7.jpg",
    url:"https://tympanus.net/Development/CreativeButtons/",
    description:"Creative Button Styles"
  },
   {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwKWWnEpm6d5NHR9O2v-QuPSSFRBdnmuj58g&s",
    url:"https://cssbuttons.app/",
    description:"Más botones...."
  },
  {
    image:"https://ik.imagekit.io/wwebdev/tr:w-180/logo-text_51kQarOOiD-.png",
    url:"https://wweb.dev/resources/css-separator-generator",
    description:"CSS Section Separator Generator"
  },
  {
    image:"https://i.sstatic.net/VvQPq.jpg",
    url:"https://codepen.io/ainalem/pen/OJWQbor",
    description:"Hamburger + clip-path"
  },
  {
    image:"https://i.ytimg.com/vi/gac2FG9NMj0/maxresdefault.jpg",
    url:"https://codepen.io/seyedi/pen/zYoeLEv",
    description:"CodePen Home CSS-only Slide-up Caption Hover Effect"
  },
];

// Esperar a que cargue
document.addEventListener("DOMContentLoaded", () => {
  generateCards();
});

function generateCards() {
  // Seleccionamos el contenedor principal
  const container = document.getElementById("cards-container");

  // Función para limpiar la URL (quitar https:// o http:// y la barra final)
  const cleanUrl = (url) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  // Generar las cards dinámicamente
  resources.forEach((resource) => {
    const card = document.createElement("article");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${resource.image}" alt="Imagen de ${cleanUrl(resource.url)}">
      <div class="card-content">
        <h2>${cleanUrl(resource.url)}</h2>
        <p>${resource.description}</p>
        <a href="${resource.url}" target="_blank" class="btn">Visitar</a>
      </div>
    `;

    console.log(container);

    container.appendChild(card);
  });
}
