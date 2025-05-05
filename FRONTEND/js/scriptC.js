document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    // Clonamos las imágenes para efecto infinito
    const firstClone = images[0].cloneNode(true);
    const lastClone = images[images.length-1].cloneNode(true);
    
    carousel.appendChild(firstClone);
    carousel.insertBefore(lastClone, images[0]);
    
    let currentIndex = 1;
    const imageWidth = images[0].clientWidth + 40; // Ancho + margen
    
    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    }

    function nextSlide() {
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
    }

    function prevSlide() {
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
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Autoplay (opcional)
    setInterval(nextSlide, 3000);
});