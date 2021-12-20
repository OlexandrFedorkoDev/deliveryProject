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

export default timer;