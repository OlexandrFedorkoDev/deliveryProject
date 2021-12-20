/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc() {
    //CALC
    let result = document.querySelector('.calculating__result-num');

    let height = document.querySelector('#height');
    let weight = document.querySelector('#weight');
    let age = document.querySelector('#age');

    let inputsCalc = document.querySelectorAll('.input__calc--js');

    let sex = 'female';
    let ratio;

    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '___'
            return
        };
        if (sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight.value) + (3.1 * height.value) - (4.3 * age.value)) * ratio)
        } else {
            result.textContent = Math.round(88.36 + (13.4 * weight.value) + (4.8 * height.value) - (5.7 * age.value) * ratio)
        }
    };
    calcTotal();
    inputsCalc.forEach(function (input) {
        input.addEventListener('input', function () {
            calcTotal();
            if (input.value.match(/\D/g)) {
                input.style.border = '2px solid red';
            } else {
                input.style.border = 'none';
            }
        })
    })
    function getStaticInformation(parentSelector, activeClass) {
        let elements = document.querySelectorAll(`${parentSelector} div`);

        elements.forEach(function (elem) {
            elem.addEventListener('click', function (e) {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = e.target.getAttribute('data-ratio')
                } else {
                    sex = e.target.getAttribute('id')
                };
                console.log(ratio, sex);

                elements.forEach(function (elem) {
                    elem.classList.remove(activeClass);
                });
                e.target.classList.add(activeClass);
                calcTotal();
            });
        });
    };
    getStaticInformation('#gender', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function cards() {
    //CARDS
    class MenuCard {
        constructor(img, title, text, price, parentSelector,) {
            this.img = img;
            this.title = title;
            this.text = text;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
        }
        render() {
            let element = document.createElement('div')
            element.innerHTML = `
            <div class="menu__item">
            <img src="${this.img}" alt="vegy">
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.text}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
        </div>
            `;
            this.parent.append(element);
        }
    }
    new MenuCard(
        "img/tabs/vegy.jpg",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        '277',
        ".menu .container",
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        '277',
        ".menu .container",
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        '277',
        ".menu .container",
    ).render();

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");


function forms() {
    // FORMS
    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'Загрузка',
        success: 'Дякуєм! Скоро ми з вами звяжемось',
        fail: 'Щось пішло не так'
    }

    forms.forEach(item => {
        bindPostData(item);
    });


    const postData = async function (url, data) {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });
        return await res.json()
    }

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.append(statusMessage)

            const formData = new FormData(form);

            const object = {};
            formData.forEach(function (value, key) {
                object[key] = value;
            });


            postData('http://localhost:3000/requests', JSON.stringify(object))
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                }).catch(() => {
                    showThanksModal(message.failure);
                }).finally(() => {
                    form.reset();
                });
        });
    }
    function showThanksModal(message) {
        let prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hide');
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal')

        let thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
    <div class="modal__content">
        <div class="modal__close">&times;</div>
        <div class="modal__title">${message}</div>
    </div>
    `
        document.querySelector('.modal').append(thanksModal);

        setTimeout(function () {
            thanksModal.remove();
            prevModalDialog.classList.remove('hide');
            prevModalDialog.classList.add('show');
            (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal')
        }, 4000)
    }


    fetch('http://localhost:3000/menu')
        .then(function (data) {
            let d = data.json()
            return d
        }).then(function (d) {
            console.log(d);
        })







}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden'
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = ''
}

function modal(trigerSelector, modalSelector) {
    //MODAL
    const modalTriger = document.querySelectorAll(trigerSelector);
    const modal = document.querySelector(modalSelector);

    modalTriger.forEach(function (item) {
        item.addEventListener('click', () => openModal(modalSelector))
    })

    modal.addEventListener('click', function (event) {
        if (event.target === modal || event.target.classList.contains('modal__close')) {
            closeModal(modalSelector)
        }
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs() {
    //TABS
    let tabs = document.querySelectorAll('.tabheader__item');
    let tabsContent = document.querySelectorAll('.tabcontent');

    let tabsParent = document.querySelector('.tabheader__items');

    function hideContent() {
        tabsContent.forEach(function (item) {
            item.classList.add('hide');
            item.classList.remove('show',);
        });

        tabs.forEach(function (item) {
            item.classList.remove('tabheader__item_active')
        });
    };

    function showContent(i) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');

        tabs[i].classList.add('tabheader__item_active')
    };

    hideContent();
    showContent(0);

    tabsParent.addEventListener('click', function (event) {
        if (event.target.classList.contains('tabheader__item')) {
            tabs.forEach(function (item, index) {
                if (event.target == item) {
                    hideContent();
                    showContent(index);
                }

            });
        }
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer() {
    //TIMER
    function getTimeRemaning(endTime) {
        let total = Date.parse(endTime) - Date.parse(new Date);

        let days = Math.floor((total / (1000 * 60 * 60 * 24)));
        let seconds = Math.floor((total / 1000) % 60);
        let minutes = Math.floor((total / 1000 / 60) % 60);
        let hours = Math.floor((total / (1000 * 60 * 60) % 24));

        return {
            'total': total,
            'days': days,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours
        }
    }

    function getZero(num) {
        if (num < 10) {
            return `0${num}`
        } else {
            return num
        }
    }

    function setClock(endTime) {

        let days = document.querySelector('#days');
        let hours = document.querySelector('#hours');
        let minutes = document.querySelector('#minutes');
        let seconds = document.querySelector('#seconds');

        let timeInterval = setInterval(updateClock, 1000)

        function updateClock() {

            const getTime = getTimeRemaning(endTime)

            days.innerHTML = getZero(getTime.days)
            hours.innerHTML = getZero(getTime.hours)
            minutes.innerHTML = getZero(getTime.minutes)
            seconds.innerHTML = getZero(getTime.seconds)

            if (getTime.total <= 0) {
                clearInterval(timeInterval)
            }
        }
    }


    setClock('2022-02-09')

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");








(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])()
;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('.modal__open', '.modal')
;(0,_modules_cards__WEBPACK_IMPORTED_MODULE_2__["default"])()
;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_3__["default"])()
;(0,_modules_forms__WEBPACK_IMPORTED_MODULE_4__["default"])()
;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__["default"])()
;(0,_modules_timer__WEBPACK_IMPORTED_MODULE_6__["default"])()













})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map