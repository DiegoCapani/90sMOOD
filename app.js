const splash = document.getElementById("splash");

const enterBtn = document.getElementById("enter-btn");

enterBtn.addEventListener("click", () => {

  splash.style.transition = "opacity 1s ease";

  splash.style.opacity = "0";

  setTimeout(() => {

    splash.style.display = "none";

  }, 1000);

});