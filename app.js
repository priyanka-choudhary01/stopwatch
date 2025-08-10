let initial_msecs = "00";
let initial_mins = "00";
let initial_secs = "00";
let body = document.querySelector("body")
let html = document.querySelector("html")
let container = document.querySelector(".container");
let sunny = document.querySelector(".sunny");
let nav = document.querySelector(".nav");
let watch = document.querySelector(".watch");
let btn = document.querySelector(".btn");
let lap = document.querySelector(".lap");
let article = document.querySelector(".info-article");
let start = document.querySelector(".start");
let reset = document.querySelector(".reset");
let stop = document.querySelector(".stop");
let thead = document.querySelector("thead");
let No_lap_msg = document.querySelector("no-lap-message");


let msecs = document.querySelector(".msecs");
let minutes = document.querySelector(".minutes");
let secs = document.querySelector(".secs");
let timerId = null;

mili_secound = Number(initial_msecs);
secound = Number(initial_secs);
mins = Number(initial_mins);

msecs.innerHTML = initial_msecs;
secs.innerHTML = initial_secs;
minutes.innerHTML = initial_mins;

sunny.addEventListener("click", () => {
    body.classList.toggle("light")
    html.classList.toggle("light")
    container.classList.toggle("light")
    nav.classList.toggle("light")
    watch.classList.toggle("light")
    btn.classList.toggle("light")
    lap.classList.toggle("light")
    article.classList.toggle("light")
});

start.addEventListener("click", () => {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
})
stop.addEventListener("click", function () {
    clearInterval(timerId);
})
let count = 0;
let previous_time = 0;
reset.addEventListener("click", function () {
    clearInterval(timerId);
     count++;
let lap1 = document.createElement('tr');
thead.appendChild(lap1);
let lap = document.createElement("td");
let lap_time = document.createElement("td");
let total_time = document.createElement("td");
lap1.append(lap);
lap1.append(lap_time);
lap1.append(total_time);

lap.innerHTML = count;
lap_time.innerHTML = `${mili_secound }`;
total_time.innerHTML = `${mili_secound + previous_time}`;

previous_time = total_time.innerHTML;

    msecs.innerHTML = initial_msecs;
    minutes.innerHTML = initial_mins;
    secs.innerHTML = initial_secs;

})
function startTimer() {
// msecs.innerHTML = mili_secound;
// minutes.innerHTML = min;
// secs.innerHTML = secound;
    mili_secound++;
    if (mili_secound == 100) {
        mili_secound = 0;
        secound++;
        secs.innerHTML = secound;
        if (secound == 60) {
            secound = 0;
            mins++;
            minutes.innerHTML = mins;
        }
    }

    let msecString = mili_secound < 10 ? `0${mili_secound}` : mili_secound;
    let secsString = secound < 10 ? `0${secound}` : secound;
    let minsString = mins < 10 ? `0${mins}` : mins;


    minutes.innerHTML = `${minsString}`
    minutes.innerHTML = `${secsString}`
    minutes.innerHTML = ` ${msecString}`;

}
