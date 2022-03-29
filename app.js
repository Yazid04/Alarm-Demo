const showAlarmContentBtn = document.querySelector(".fa-plus");
const setAlarmSection = document.querySelector('.alarm-info');
const hourInputContainer = document.querySelector('[data-hour-input]');
const minuteInputContainer = document.querySelector('[data-minute-input]');
const add = document.querySelector("[data-add]");



showAlarmContentBtn.addEventListener("click", showAlarmContent);
function showAlarmContent() {
    setAlarmSection.classList.toggle("adAlarmContent");
}

function hour() {
    let hourInput = hourInputContainer.children[0];

    hourInput.addEventListener("change", numberBorders)
    function numberBorders() {
        if (hourInput == NaN || hourInput.value < 1) hourInput.value = 1;
        if (hourInput.value > 12) hourInput.value = 1;
    }
}
hour();

function minute() {
    let minuteInput = minuteInputContainer.children[0];


    minuteInput.addEventListener("change", numberBorders)
    function numberBorders() {
        if (minuteInput == NaN || minuteInput.value < 1) minuteInput.value = '0' + 0;
        if (minuteInput.value > 59) minuteInput.value = 00;
        if (minuteInput.value.length < 2) minuteInput.value = "0" + minuteInput.value;
        if (minuteInput.value.length > 2) minuteInput.value = "0" + 0;
    }
}
minute();


add.addEventListener("click", addAlarms);
function addAlarms() {
    const hourInput = hourInputContainer.children[0];
    const minuteInput = minuteInputContainer.children[0];


    const alarmsContainer = document.querySelector(".alarms");

    const timeDiv = document.createElement("div");
    timeDiv.innerText = `${hourInput.value} : ${minuteInput.value}`
    timeDiv.classList.add('actualAlarm');
    timeDiv.style.backgroundColor = 'var(--primary-clr)';
    timeDiv.style.padding = '0px 10px'
    timeDiv.style.fontSize = '1.2em';


    alarmsContainer.appendChild(timeDiv);
    hourInput.value = 1;
    minuteInput.value = "0" + 0;
}
