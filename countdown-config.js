/*
 * TU PODES ALTERAL ESSE DOCUMENTO AO TEU PRAZER DESDE QUE NÃO
 * ESQUEÇAS DE REFERENCIAR AS DATAS DE INICIO E TÉRMINO DO COUNTDOWN
 */


/*===================================*
    COUNTDOWN JS
*===================================*/
// Get the new year 
/*const getNewYear = () => {
    const currentYear = new Date().getFullYear();
    return new Date($('.countdown-timer').attr('datetime-expired')); //<!!!!!! Coloque aqui a data final de termino do Countdown
};*/

// update the year element
/*const year = document.querySelector('.year');
year.innerHTML = getNewYear().getFullYear();*/

// select elements
const app = document.querySelector('.countdown-timer');
//const message = document.querySelector('.message');
//const heading = document.querySelector('.countdown-timer h1');


const format = (t) => {
    return t < 10 ? '0' + t : t;
};

const render = (time) => {
    app.innerHTML = `
        <div class="count-down">
            <div class="timer">
                <h2 class="days">${(time == null) ? '00' : format(time.days)}</h2>
                <small>Days</small>
            </div>
            <div class="timer">
                <h2 class="timer-split">:</h2>
            </div>
            <div class="timer">
                <h2 class="hours">${(time == null) ? '00' : format(time.hours)}</h2>
                <small>Hours</small>
            </div>
            <div class="timer">
                <h2 class="timer-split">:</h2>
            </div>
            <div class="timer">
                <h2 class="minutes">${(time == null) ? '00' : format(time.minutes)}</h2>
                <small>Minutes</small>
            </div>
            <div class="timer">
                <h2 class="timer-split">:</h2>
            </div>
            <div class="timer">
                <h2 class="seconds">${(time == null) ? '00' : format(time.seconds)}</h2>
                <small>Seconds</small>
            </div>
        </div>
        `;
};


const showMessage = () => {
    message.innerHTML = `Happy New Year ${newYear}!`;
    app.innerHTML = '';
    //heading.style.display = 'none';
};

const hideMessage = () => {
    message.innerHTML = '';
    //heading.style.display = 'block';
};

const complete = () => {
    render(null);
};

const countdownTimer = new CountDown(
    new Date($('.countdown-timer').attr('datetime-expired')),
    render,
    complete,
    new Date($('.countdown-timer').attr('datetime-actual'))
);