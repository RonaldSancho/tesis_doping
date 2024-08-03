document.addEventListener('DOMContentLoaded', () => {
    // Fade in the body
    document.body.classList.add('loaded');

    // Fade in the nav items one by one
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = 1;
        }, index * 500); // Adjust the delay as needed
    });
});

function showContent(event, id, text, introTextId) {
    event.preventDefault(); // Esto evita que el enlace haga cualquier acción predeterminada, como navegar o recargar.

    // Actualiza el texto introductorio adecuado basado en introTextId
    document.getElementById(introTextId).innerHTML = text;

    // Oculta todas las secciones de contenido
    document.querySelectorAll('.content-section-medicamentos').forEach(section => {
        section.style.display = 'none';
    });

    // Muestra la sección de contenido seleccionada
    document.getElementById(id).style.display = 'block';
}

function showContent(event, id, text, introTextId) {
    event.preventDefault(); // Esto evita que el enlace haga cualquier acción predeterminada, como navegar o recargar.

    // Actualiza el texto introductorio adecuado basado en introTextId
    document.getElementById(introTextId).innerHTML = text;

    // Oculta todas las secciones de contenido
    document.querySelectorAll('.content-section-infecciones').forEach(section => {
        section.style.display = 'none';
    });

    // Muestra la sección de contenido seleccionada
    document.getElementById(id).style.display = 'block';
}
