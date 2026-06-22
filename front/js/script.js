document.addEventListener('DOMContentLoaded', () => {

    const buscador = document.getElementById('buscador');
    const tarjetas = document.querySelectorAll('#catalogo .col-12');

    if (buscador) {
        buscador.addEventListener('input', (e) => {
            const textoUsuario = e.target.value.toLowerCase().trim();

            tarjetas.forEach(tarjeta => {
                const titulo = tarjeta.querySelector('.card-title').textContent.toLowerCase();
                
                if (titulo.includes(textoUsuario)) {
                    tarjeta.style.display = 'block';
                    setTimeout(() => { tarjeta.style.opacity = '1'; }, 10);
                } else {
                    tarjeta.style.opacity = '0';
                    tarjeta.style.display = 'none';
                }
            });
        });
    }

    const menu = document.getElementById('menu');
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('click', () => {
            const bootstrapMenu = bootstrap.Collapse.getInstance(menu);
            if (bootstrapMenu) {
                bootstrapMenu.hide();
            }
        });
    });

    const secciones = document.querySelectorAll('div[id]');
    
    window.addEventListener('scroll', () => {
        let posicionScroll = window.scrollY + 150;

        secciones.forEach(seccion => {
            const top = seccion.offsetTop;
            const height = seccion.offsetHeight;
            const id = seccion.getAttribute('id');

            if (posicionScroll >= top && posicionScroll < top + height) {
                links.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

});