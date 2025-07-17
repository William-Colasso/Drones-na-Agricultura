 function toggleInfo() {
    const info = document.getElementById("extra-info");
    const btn = document.querySelector("header button");
    if (info.style.display === "none") {
      info.style.display = "block";
      btn.innerText = "Ocultar detalhes";
    } else {
      info.style.display = "none";
      btn.innerText = "Mostrar detalhes";
    }
  }