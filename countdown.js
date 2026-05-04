

function createString(message, days, hours, minutes, seconds) {
    let fullMessage = message;
    if (days !== 0) {
        fullMessage += days + " Days  ";
    }
    if (hours !== 0) {
        fullMessage += hours + " Hours  ";
    }
    if (minutes !== 0) {
        fullMessage += minutes + " Minutes  ";
    }
    if (seconds !== 0) {
        fullMessage += seconds + " Seconds  ";
    }
    return fullMessage;
}

export function startCountdown(date, htmlid, message) { // date in format: e.g. new Date("Jan 5, 2030 15:37:25").getTime()
// Credits: https://www.w3schools.com/howto/howto_js_countdown.asp - lines 6 to 34.
    // Set the date we're counting down to
    let countDownDate = date;

    // Update the count down every 1 second
    let x = setInterval(function() {

        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById(htmlid).innerHTML = createString(message, days, hours, minutes, seconds);

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById(htmlid).innerHTML = message + "COMPLETE!!!";
        }
    }, 1000);
}


