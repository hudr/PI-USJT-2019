var playPause = anime.timeline({
    autoplay: false,
    endDelay: 2000,
    duration: 1000,
    easing: 'easeInOutQuad',
}).add({
    targets: 'div.heart.fas.fa-heart',
    translateY: [
        { value: 250, duration: 1000 },
    ],
    duration: 2500,
    scale: 0.2,
    opacity: 0
}).add({
    targets: 'div.pizza.fas.fa-pizza-slice',
    translateY: [
        { value: 250, duration: 1000 },
    ],
    duration: 2500,
    scale: 0.2,
    opacity: 0
}).add({
    targets: 'div.apple.fas.fa-apple-alt',
    translateY: [
        { value: 250, duration: 1000 },
    ],
    duration: 2500,
    scale: 0.2,
    opacity: 0
}).add({
    targets: 'div.ball.fas.fa-futbol',
    translateY: [
        { value: 250, duration: 1000 },
    ],
    duration: 2500,
    scale: 0.2,
    opacity: 0
});

document.querySelector('#boxes .play').onclick = playPause.play;
document.querySelector('#boxes .pause').onclick = playPause.pause


function finalizado() {
    document.getElementById("okfifo").innerHTML = '<div class="alert alert-success txtBox" role="alert">PROCESSO SJF FINALIZADO</div>';
}

playPause.finished.then(finalizado);