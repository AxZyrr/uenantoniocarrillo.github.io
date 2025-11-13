document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener el checkbox que controla la visibilidad del menú
    const menuToggle = document.getElementById('menu-toggle');
    // 2. Obtener el elemento NAV (contenedor de la navegación)
    const nav = document.querySelector('.main-nav');
    // 3. Obtener todos los enlaces dentro del menú
    const menuLinks = document.querySelectorAll('.main-nav a');

    // --- Función para cerrar el menú ---
    const closeMenu = () => {
        // Desmarcar el checkbox para ocultar el menú (CSS lo maneja)
        if (menuToggle.checked) {
            menuToggle.checked = false;
        }
    };

    // --- 1. Cerrar el menú al hacer clic en un enlace ---
    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const isDropdownParent = link.closest('.dropdown') && link.getAttribute('href') === '#';

            if (isDropdownParent) {
                event.preventDefault(); 
            } else {
                closeMenu();
            }
        });
    });

    // --- 2. Cerrar el menú al hacer clic fuera de la navegación ---
    document.addEventListener('click', (event) => {
        // Verificar si el clic NO fue dentro del contenedor de navegación 
        // y si el menú está actualmente abierto.
        if (menuToggle.checked && !nav.contains(event.target)) {
            closeMenu();
        }
    });
});