// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();



// Mostrar el contenido basado en la categoría seleccionada
function showContentMedications(event, id, text, introTextId) {
    event.preventDefault(); // Evitar la acción predeterminada del enlace

    // Actualizar el texto introductorio adecuado basado en introTextId
    document.getElementById(introTextId).innerHTML = text;

    // Ocultar todas las secciones de contenido de medicamentos
    document.querySelectorAll('.content-section-medicamentos').forEach(section => {
        section.style.display = 'none';
    });

    // Mostrar la sección de contenido seleccionada de medicamentos
    document.getElementById(id).style.display = 'block';
}

function showContentInfections(event, id, text, introTextId) {
    event.preventDefault(); // Evitar la acción predeterminada del enlace

    // Actualizar el texto introductorio adecuado basado en introTextId
    document.getElementById(introTextId).innerHTML = text;

    // Ocultar todas las secciones de contenido de infecciones
    document.querySelectorAll('.content-section-infecciones').forEach(section => {
        section.style.display = 'none';
    });

    // Mostrar la sección de contenido seleccionada de infecciones
    document.getElementById(id).style.display = 'block';
}


/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}