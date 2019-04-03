
var playPause =
    anime({
        targets: 'div.box',
        borderRadius: 50,
        duration: 10000,
        opacity: 0,

        backgroundColor: '#07d100',
        translateY: [
            { value: 200, duration: 1000 },
            { value: 200, duration: 8000 },
            //{ value: 0, duration: 500 }
        ],

        delay: function (el, i, l) { return i * 2000 },
        autoplay: false,
        easing: 'easeInOutQuad',
        loop: false
    });

document.querySelector('#boxes .play').onclick = playPause.play;
document.querySelector('#boxes .pause').onclick = playPause.pause;


function finalizado() {

    document.getElementById("okfifo").innerHTML = '<div class="alert alert-success txtBox" role="alert">PROCESSO FIFO FINALIZADO</div>';
   
}

playPause.finished.then(finalizado);