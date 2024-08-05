document.getElementById('playImageAudio').addEventListener('click', function() {
    var audio = new Audio('Assets/ImageDescription.mp3');
    audio.play();
});

document.getElementById('playVideoAudio').addEventListener('click', function() {
    var audio = new Audio('Assets/VideoDescription.mp3');
    audio.play();
});

document.getElementById('playMusicAudio').addEventListener('click', function() {
    var audio = new Audio('Assets/MusicDescription.mp3');
    audio.play();
});
