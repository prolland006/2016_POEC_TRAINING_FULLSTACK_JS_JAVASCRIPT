var video = document.querySelector(".videoplayer__video");

var fullScreenButton = document.getElementById("fsb");

fullScreenButton.addEventListener('click', function(event){
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    }
});

var playButton = document.getElementById("play");
playButton.addEventListener('click', function(event){
    video.play();
});

var pauseButton = document.getElementById("pause");
pauseButton.addEventListener('click', function(event){
    video.pause();
});

var volumeUpButton = document.getElementById("volumeUp");
volumeUpButton.addEventListener('click', function(event){
    video.volume += 0.1;
});

var volumeDownButton = document.getElementById("volumeDown");
volumeDownButton.addEventListener('click', function(event){
    video.volume -= 0.1;
});

var timeLabel = document.getElementById("time");
video.addEventListener("timeupdate", function(event) {
    var target = event.target || event.srcElement;
    timeLabel.innerHTML = secondsToHms(target.currentTime);
});


/** from http://stackoverflow.com/a/5539081 **/
function secondsToHms(seconds) {
    var d = Number(seconds);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    return ((h > 0 ? h + ":" : "") + (m > 0 ? (h > 0 && m < 10 ? "0" : "") + m + ":" : "0:") + (s < 10 ? "0" : "") + s);
}