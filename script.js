const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const slideCount = slides.length;
const slidesPerView = 3;
let currentIndex = slidesPerView; // Start from the first clone

// Clone the first and last three slides to create the loop
const firstClones = [...slides].slice(0, slidesPerView).map(slide => slide.cloneNode(true));
const lastClones = [...slides].slice(-slidesPerView).map(slide => slide.cloneNode(true));

firstClones.forEach(clone => slider.appendChild(clone));
lastClones.forEach(clone => slider.insertBefore(clone, slides[0]));

const updatedSlides = document.querySelectorAll('.slide');
const totalSlides = updatedSlides.length;

slider.style.transform = `translateX(-${currentIndex * 300}px)`; // 300px = width of one slide

// Handle the Next button click
document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex >= totalSlides - slidesPerView * 2) {
        currentIndex += slidesPerView;
        slider.style.transition = 'transform 0.5s ease-in-out';
        slider.style.transform = `translateX(-${currentIndex * 300}px)`;

        setTimeout(() => {
            slider.style.transition = 'none';
            currentIndex = slidesPerView;
            slider.style.transform = `translateX(-${currentIndex * 300}px)`;
        }, 500);
    } else {
        currentIndex += slidesPerView;
        slider.style.transition = 'transform 0.5s ease-in-out';
        slider.style.transform = `translateX(-${currentIndex * 300}px)`;
    }
});

// Handle the Previous button click
document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex <= slidesPerView) {
        currentIndex -= slidesPerView;
        slider.style.transition = 'transform 0.5s ease-in-out';
        slider.style.transform = `translateX(-${currentIndex * 300}px)`;

        setTimeout(() => {
            slider.style.transition = 'none';
            currentIndex = totalSlides - slidesPerView * 2;
            slider.style.transform = `translateX(-${currentIndex * 300}px)`;
        }, 500);
    } else {
        currentIndex -= slidesPerView;
        slider.style.transition = 'transform 0.5s ease-in-out';
        slider.style.transform = `translateX(-${currentIndex * 300}px)`;
    }
});
