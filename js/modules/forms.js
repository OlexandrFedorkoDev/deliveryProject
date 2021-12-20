import { closeModal, openModal } from './modal'

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
        openModal('.modal')

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
            closeModal('.modal')
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
export default forms;