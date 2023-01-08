const clock = document.querySelector("#clock");
const today = document.querySelector("#today");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}시 ${minutes}분 ${seconds}초`;
}

getClock();
setInterval(getClock, 1000);

function getToday() {
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    today.innerText = `${year}년 ${month}월 ${day}일`;
}

getToday();
setInterval(getToday, 1000);
