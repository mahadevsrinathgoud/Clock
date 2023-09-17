const secondsElement = document.querySelector('.seconds');
const minutesElement = document.querySelector('.minutes');
const hoursElement = document.querySelector('.hours');

function setRotation(element, degrees) {
    element.style.transform = `rotate(${degrees + 90}deg)`;
}

function updateClockHandsToCurrentTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsRotationDegrees = (seconds / 60) * 360;
    const minutesRotationDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hoursRotationDegrees = (hours / 12) * 360 + (minutes / 60) * 30;

    setRotation(secondsElement, secondsRotationDegrees);
    setRotation(minutesElement, minutesRotationDegrees);
    setRotation(hoursElement, hoursRotationDegrees);
}

setInterval(updateClockHandsToCurrentTime, 1000);
updateClockHandsToCurrentTime();
