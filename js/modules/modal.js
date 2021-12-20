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
export default modal
export { closeModal }
export { openModal }