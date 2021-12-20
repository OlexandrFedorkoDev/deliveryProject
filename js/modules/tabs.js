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
export default tabs;