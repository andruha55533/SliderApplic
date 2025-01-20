document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;
    let autoslide;

    function showSlide(index) {
        const offset = -index * 100; 
        slides.forEach(slide => {
            slide.style.transform = `translateX(${offset}%)`;
        });

        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    function nextSlide(){
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    showSlide(currentIndex);

    setTimeout(() => {
        autoslide = setInterval(nextSlide, 5000);
    }, 5000);

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            clearInterval(autoslide);
            currentIndex = index;
            showSlide(currentIndex);

            autoslide = setInterval(nextSlide, 5000);
        });
    });
});

document.addEventListener('mousemove', (event) => {
    const xPercent = (event.clientX / window.innerWidth) * 100;
    const yPercent = (event.clientY / window.innerHeight) * 100;

    const image2 = document.querySelector('.image-2');
    const image3 = document.querySelector('.image-3');
    const image4 = document.querySelector('.image-4');

    const rotateX = (yPercent - 50) / 5;
    const rotateY = (xPercent - 50) / 5;

    image2.style.transform = `translate(${(50 - xPercent) / 10}%, ${(50 - yPercent) / 10}%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    image3.style.transform = `translate(${(50 - xPercent) / 10}%, ${(50 - yPercent) / 10}%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    image4.style.transform = `translate(${(50 - xPercent) / 10}%, ${(50 - yPercent) / 10}%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});