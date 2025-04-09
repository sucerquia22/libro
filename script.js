document.addEventListener("DOMContentLoaded", function() {
    const paginas = document.querySelectorAll(".pagina");
    const botonSiguiente = document.getElementById("botonSiguiente");
    const botonAnterior = document.getElementById("botonAnterior");
    const cambiarTema = document.getElementById("cambiarTema");
    const esquinasPagina = document.querySelectorAll(".esquina_pagina");
    
    let paginaActual = 0;
    const totalPaginas = paginas.length;
    
    function siguientePagina() {
      if (paginaActual < totalPaginas - 1) {
        paginas[paginaActual].classList.add("volteada");
        paginaActual++;
      }
    }
    
    function paginaAnterior() {
      if (paginaActual > 0) {
        paginaActual--;
        paginas[paginaActual].classList.remove("volteada");
      }
    }
    
    // Event listeners para los botones
    botonSiguiente.addEventListener("click", siguientePagina);
    botonAnterior.addEventListener("click", paginaAnterior);
    
    // Navegación con teclado
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") siguientePagina();
      if (e.key === "ArrowLeft") paginaAnterior();
    });
    
    // Cambiar tema claro/oscuro
    cambiarTema.addEventListener("click", () => {
      document.body.classList.toggle("modoOscuro");
      // Guardar preferencia de tema
      if (document.body.classList.contains("modoOscuro")) {
        localStorage.setItem("tema", "oscuro");
        cambiarTema.textContent = "🌞";
      } else {
        localStorage.setItem("tema", "claro");
        cambiarTema.textContent = "🌓";
      }
    });
    
    // Cargar tema guardado
    const temaGuardado = localStorage.getItem("tema");
    if (temaGuardado === "oscuro") {
      document.body.classList.add("modoOscuro");
      cambiarTema.textContent = "🌞";
    }
    

    // Función para ajustar el tamaño según la pantalla
    function ajustarPorTamañoPantalla() {
      const libro = document.getElementById("libro");
      if (window.innerWidth < 600) {
        libro.style.maxWidth = "95%";
      } else {
        libro.style.maxWidth = "800px";
      }
    }
    
    window.addEventListener("resize", ajustarPorTamañoPantalla);
    ajustarPorTamañoPantalla(); // Ajuste inicial
  });