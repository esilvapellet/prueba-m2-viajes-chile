// activa tooltips

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// toggle para mostrar/ocultar contenido de seccion #destacados

$("#destacados .card-img-top").on("click", function(){
    $("#destacados .card-body").toggle("slow");
})

// evento click para mostrar alert de boton #enviarFormulario

$(document).ready(function () {
    $("#enviarFormulario").click(function () {
        alert("El formulario se ha enviado correctamente.");
    });
});