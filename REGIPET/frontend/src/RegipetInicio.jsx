import { useEffect } from 'react';
import './styles/stylec.css';
import './styles/stylem.css';
import { Link } from 'react-router-dom';


export default function RegipetInicio() {
  useEffect(() => {
    // ==== scriptC.js (Carrusel) ====
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    if (carousel && images.length > 0 && prevBtn && nextBtn) {
      const firstClone = images[0].cloneNode(true);
      const lastClone = images[images.length - 1].cloneNode(true);
      carousel.appendChild(firstClone);
      carousel.insertBefore(lastClone, images[0]);

      let currentIndex = 1;
      const imageWidth = images[0].clientWidth + 40;

      const updateCarousel = () => {
        carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
      };

      const nextSlide = () => {
        currentIndex++;
        carousel.style.transition = 'transform 0.5s ease-in-out';
        updateCarousel();

        if (currentIndex >= images.length + 0) {
          setTimeout(() => {
            carousel.style.transition = 'none';
            currentIndex = 1;
            updateCarousel();
          }, 500);
        }
      };

      const prevSlide = () => {
        currentIndex--;
        carousel.style.transition = 'transform 0.5s ease-in-out';
        updateCarousel();

        if (currentIndex <= 0) {
          setTimeout(() => {
            carousel.style.transition = 'none';
            currentIndex = images.length;
            updateCarousel();
          }, 500);
        }
      };

      nextBtn.addEventListener('click', nextSlide);
      prevBtn.addEventListener('click', prevSlide);
      const interval = setInterval(nextSlide, 3000);

      // Limpieza
      return () => {
        clearInterval(interval);
        nextBtn.removeEventListener('click', nextSlide);
        prevBtn.removeEventListener('click', prevSlide);
      };
    }
  }, []);

  useEffect(() => {
    // ==== scriptN.js (Menú móvil) ====
    const menuItems = document.querySelectorAll('.menu-item');

    if (window.innerWidth <= 768) {
      menuItems.forEach(item => {
        const link = item.querySelector('a');
        const submenu = item.querySelector('.submenu');

        if (link && submenu) {
          link.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelectorAll('.submenu').forEach(menu => {
              if (menu !== submenu) {
                menu.style.display = 'none';
              }
            });

            submenu.style.display =
              submenu.style.display === 'block' ? 'none' : 'block';
          });
        }
      });
    }
  }, []);

  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src="/logoWed.jpeg" alt="Logo" />
          <h1>REGIPET</h1>
        </div>

        <nav className="nav">
          <div className="menu-item">
            <a href="#">Menu</a>
            <div className="submenu">
            <a href="#">Volver al inicio</a>
            </div>
          </div>

          <div className="menu-item">
            <a href="#">Ingreso</a>
            <div className="submenu">
            <Link to="/registro">Registro</Link>
            <Link to="/login">Login</Link>
            </div>
          </div>

        </nav>
      </header>

      <div className="frase">
        <h1>Ayudamos a que estén juntos a ti 💖💖💖</h1>
      </div>

      <div className="video">
        <img src="/amoranimal.jpg" alt="animales" />
        <div className="descripcion">
          <p>
            <strong>Regipet</strong> es la plataforma donde puedes identificar, registrar y dar en adopción a tus mascotas. 
            Nuestro objetivo es fomentar la tenencia responsable y reducir el abandono animal. Aquí, puedes registrar a tus mascotas incluyendo datos de contacto y características clave, lo que facilita su identificación en caso de extravío. 
            Además, conectamos a personas interesadas en adoptar con animales que buscan un hogar, promoviendo la adopción responsable y ayudando a disminuir la cantidad de mascotas en situación de calle.
          </p>
        </div>
      </div>

      <div className="carousel-container">
        <button className="prev">❮</button>
        <div className="carousel">
          <img src="/animal1.jpeg" alt="Imagen 1" />
          <img src="/animal2.jpeg" alt="Imagen 2" />
          <img src="/animal3.jpeg" alt="Imagen 3" />
          <img src="/animal4.jpeg" alt="Imagen 4" />
          <img src="/animal5.jpeg" alt="Imagen 5" />
        </div>
        <button className="next">❯</button>
      </div>

      <footer className="footer">
        <p>© 2025 REGIPET. Proyecto ProWed.</p>
        <p>Contáctenos: ###########</p>
      </footer>
    </div>
  );
}
