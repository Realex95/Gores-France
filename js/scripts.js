  const carousel = document.querySelector('.carousel');
        const prevBtn = document.querySelector('.prev-slide');
        const nextBtn = document.querySelector('.next-slide');
        let slideIndex = 0;

        const showSlides = () => {
            const slides = carousel.querySelectorAll('.slide');
            if (slideIndex >= slides.length) {
                slideIndex = 0;
            } else if (slideIndex < 0) {
                slideIndex = slides.length - 1;
            }
            slides.forEach(slide => {
                slide.style.display = 'none';
            });
            slides[slideIndex].style.display = 'block';
        }

        prevBtn.addEventListener('click', () => {
            slideIndex--;
            showSlides();
        });

        nextBtn.addEventListener('click', () => {
            slideIndex++;
            showSlides();
        });

        showSlides();