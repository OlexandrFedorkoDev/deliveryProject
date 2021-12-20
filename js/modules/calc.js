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

export default calc;