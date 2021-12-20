function slider() {
    // SLIDER

    const slides = document.querySelectorAll('.offer__slide');
    const prev = document.querySelector('.offer__slider-prev');
    const next = document.querySelector('.offer__slider-next');
    const current = document.querySelector('#current');
    const total = document.querySelector('#total');

    let slideIndex = 1;

    showSlide(slideIndex)

    if (slides.length < 10) {
        current.innerHTML = `0${slides.length}`
    } else {
        current.innerHTML = slides.length
    }


    function showSlide(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        slides.forEach(function (slide) {
            slide.style.display = 'none'
        });

        slides[slideIndex - 1].style.display = 'block';


        if (slides.length < 10) {
            current.innerHTML = `0${slideIndex}`
        } else {
            current.innerHTML = slideIndex
        }

    }


    function plusSlide(n) {
        showSlide(slideIndex = slideIndex + n)
    }
    prev.addEventListener('click', function () {
        plusSlide(-1)
    });
    next.addEventListener('click', function () {
        plusSlide(1)
    });

    // const slides = document.querySelectorAll('.offer__slide');
    // const slider = document.querySelector('.offer__slider');
    // const prev = document.querySelector('.offer__slider-prev');
    // const next = document.querySelector('.offer__slider-next');
    // const current = document.querySelector('#current');
    // const total = document.querySelector('#total');
    // const slidesWrapper = document.querySelector('.offer__slider-wrapper');
    // const slidesField = document.querySelector('.offer__slider-inner');

    // const width = 650;

    // let offset = 0;
    // let slideIndex = 1;

    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`
    //     current.textContent = `0${slideIndex}`
    // } else {
    //     total.textContent = slides.length
    //     current.textContent = slideIndex
    // }


    // slidesField.style.width = 100 * slides.length + '%';
    // slidesField.style.display = 'flex';
    // slidesField.style.transition = '0.5s all';

    // slidesWrapper.style.overflow = 'hidden';

    // slides.forEach(slide => {
    //     slide.style.width = width + 'px';
    // });












    // next.addEventListener('click', () => {
    //     if (offset == (+width * (slides.length - 1))) {
    //         offset = 0;
    //     } else {
    //         offset += +width;
    //     }
    //     slidesField.style.transform = `translateX(-${offset}px)`;

    //     if (slideIndex === slides.length) {
    //         slideIndex = 1;
    //     } else {
    //         slideIndex++;
    //     }

    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }


    // });


    // prev.addEventListener('click', () => {
    //     if (offset == 0) {
    //         offset = +width * (slides.length - 1);
    //     } else {
    //         offset -= +width;
    //     }
    //     slidesField.style.transform = `translateX(-${offset}px)`;

    //     if (slideIndex === 1) {
    //         slideIndex = slides.length;
    //     } else {
    //         slideIndex--;
    //     }

    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }

    // });
}

export default slider;