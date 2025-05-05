/*menu*/ 
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('#main-nav .menu-item');
    
    if (window.innerWidth <= 768) {
        menuItems.forEach(item => {
            const link = item.querySelector('a');
            const submenu = item.querySelector('.submenu');
            
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Cerrar otros submenús abiertos
                document.querySelectorAll('#main-nav .submenu').forEach(menu => {
                    if (menu !== submenu) {
                        menu.style.display = 'none';
                    }
                });
                
                // Alternar el submenú actual
                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            });
        });
    }
});