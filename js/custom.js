// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

function showContentCards(event, id, title, text) {
    event.preventDefault(); // Evitar la acción predeterminada del enlace

    // Actualizar el texto del título h2
    document.querySelector('#medications h2').innerHTML = title;

    // Actualizar el texto introductorio
    document.getElementById('introTextMedicationsParagraph').innerHTML = text;

    // Ocultar todas las secciones de contenido de cards
    document.querySelectorAll('.content-section-cards').forEach(section => {
        section.style.display = 'none';
    });

    // Mostrar la sección de contenido seleccionada
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