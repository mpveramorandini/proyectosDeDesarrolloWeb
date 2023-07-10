
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  
//  if (links.classList.contains("show-links")) {
//    links.classList.remove("show-links");
//   } else {
//     links.classList.add("show-links");
//  }
  links.classList.toggle("show-links"); /* permite cada vez que se ejecute cambiar de estado la visibilidad del elemento HTML
  , es decir si está visible pasa a oculto y si se encuentra oculto pasa a visible. */
});
