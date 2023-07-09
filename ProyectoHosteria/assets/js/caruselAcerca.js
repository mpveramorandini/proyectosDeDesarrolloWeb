/*carusel a cercade */

var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,1500);

function nextSlide() {
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'slide active';
}

// funcionalidad de desplazar hacia arriba
/* La primera línea selecciona el botón de desplazar-hacia-arriba con el atributo id adjunto a el en el HTML.
 Usamos el método querySelector() aquí. También podríamos utilizar el método getElementById() .

En las líneas restantes, usamos el  eventListener del click para obtener la acción click del usuario
 y hacer que reaccione la parte  de scrollTo del objeto de Windows para que el botón funcione.

Con esta funcionalidad, cuando el usuario hace click en el botón desplazar-hacia-arriba,
 la página se desplaza hacia arriba y al lado izquierdo del sitio web suavemente. 
  Hicimos esto configurando las propiedades top a 0, left a 0, y   behavior a smooth.*/
  
  const desplazarArriba = document.querySelector("#desplazarse-hacia-arriba");

  desplazarArriba.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
  
  const burguer = document.querySelector("#menu-hamburguesa");
  const ul = document.querySelector("nav ul");
  const nav = document.querySelector("nav");
  
  burguer.addEventListener("click", () => {
      ul.classList.toggle("show");
    });
  
  
  // Cerrar el menú de hambuguesa cuando se hace click en un enlace  
  
  // los enlaces de navegación tienen una clase de enlace de navegación del HTML. Así que los seleccioné todos con esa clase
  // y los puse en una variable llamada  nav-link.  Hicimos esto con el método  querySelectorAll() .
  //Luego recorrí todos los enlaces con el método forEach de arreglos y puse un event listener  de click en todos ellos. 
  //Después usé el método remove() proporcionado por el DOM para eliminar la clase de show cada vez que se hace
  // click en cualquiera de los elementos del menú de navegación.
  
  // Seleccionar enlaces de navegación
  const navLink = document.querySelectorAll(".nav-link");
  
  navLink.forEach((link) =>
    link.addEventListener("click", () => {
      ul.classList.remove("show");
    })
  );
  