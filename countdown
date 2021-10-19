const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24,
    date = new Date(($_GET.date || '0').replace(/%20/g, ' '))

let countDown = date != 'Invalid Date' ? date.getTime() : new Date(0).getTime(),
    timer = {},
    x = setInterval(function() {

        let now = new Date().getTime(),
            distance = countDown - now;

        timer.days = Math.floor(distance / (day)) > 0 ? Math.floor(distance / (day)) + " Hari " : '';
        timer.hours = Math.floor((distance % (day)) / (hour)) > 0 ? Math.floor((distance % (day)) / (hour)) + " Jam " : '';
        timer.minutes = Math.floor((distance % (hour)) / (minute)) > 0 ? Math.floor((distance % (hour)) / (minute)) + " Menit " : '';
        timer.seconds = Math.floor((distance % (minute)) / second) > 0 ? Math.floor((distance % (minute)) / second) + " Detik" : '';

        document.getElementById('timer').innerText = timer.days + timer.hours + timer.minutes + timer.seconds;

        //do something later when date is reached
        if (distance <= 0) {
            clearInterval(x);
            ondate = true;
            document.getElementById('countdown').innerHTML = '<h1>Selesai</h1>';
        }

    }, second)

if (countDown - new Date().getTime() > 0) {
    document.getElementById('countdown').style.display = 'block'
}
