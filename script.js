// skriv din kode her.
document.addEventListener("DOMContentLoaded", function () {
  // vælg alle blomster og add en click eventlistener til dem.
  var blomster = document.querySelectorAll("img");
  blomster.forEach(function (blomst) {
    blomst.addEventListener("click", function () {
      // lav en funktion der tilføjer class'en "pluk" til den blomst der bliver klikket på.
      blomst.classList.toggle("pluk");
    });
  });
});
