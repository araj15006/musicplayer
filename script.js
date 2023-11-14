console.log("Welcome");
let songIndex = 0;
let audioElement = new Audio();
let masterPlay = document.getElementById('masterPlay');
let masterPlayi = document.getElementById('masterPlayi');
let gif = document.getElementById('gif');
let myProgressBar = document.getElementById('myProgressBar');
let songitems = Array.from(document.getElementsByClassName('songitems'));
let playingSong = document.getElementsByClassName('playingSong');


let songs = [
    { songName: "Alan Walker offical song", filePath: "song/1.mp3", coverPath: "cover/1.png" },
    { songName: "one day I'm gonna fly", filePath: "song/2.mp3", coverPath: "cover/1.png" },
    { songName: "status song best of the year", filePath: "song/3.mp3", coverPath: "cover/1.png" },
    { songName: "you and I edm top drop", filePath: "song/4.mp3", coverPath: "cover/1.png" },
    { songName: "har funn maulla ", filePath: "song/5.mp3", coverPath: "cover/1.png" }
];

songitems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerHTML = songs[i].songName.slice(0,10)+'....';
});

Array.from(document.getElementsByClassName('playitem')).forEach((element) => {
    element.addEventListener('click', (e) => {
        index = parseInt(e.target.id)
        console.log(index);
        // console.log(e.target);
        audioElement.src = `song/${index}.mp3`;
        audioElement.play();
        document.getElementById('playButton').style.display = 'none';
        document.getElementById('pauseButton').style.display = 'block';
        gif.style.opacity = 1;
        console.log(playingSong[0]);
        let currentSongName = songs[index - 1].songName.slice(0,17)+'.....';
        playingSong[0].innerHTML = currentSongName;
        console.log(currentSongName)
    });
});



// Set the initial visibility of the play/pause buttons and gif
gif.style.opacity = 0;
document.getElementById('playButton').style.display = 'block';
document.getElementById('pauseButton').style.display = 'none';

// Handle play/pause
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        document.getElementById('playButton').style.display = 'none';
        document.getElementById('pauseButton').style.display = 'block';
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        document.getElementById('playButton').style.display = 'block';
        document.getElementById('pauseButton').style.display = 'none';
        gif.style.opacity = 0;
    }
});
// Listen to timeupdate events for the progress bar
audioElement.addEventListener('timeupdate', () => {
    let progress = (audioElement.currentTime / audioElement.duration) * 100;
    myProgressBar.value = progress;
});

// Update audio playback time when the progress bar is changed
myProgressBar.addEventListener('change', () => {
    let seekTime = (myProgressBar.value / 100) * audioElement.duration;
    audioElement.currentTime = seekTime;
});

// Automatically stop the song when it reaches the end
audioElement.addEventListener('ended', () => {
    audioElement.pause();
    document.getElementById('playButton').style.display = 'block';
    document.getElementById('pauseButton').style.display = 'none';
    gif.style.opacity = 0;
    myProgressBar.value = 0;
});

// Space bar to toggle play/pause
document.addEventListener('keydown', (event) => {
    if (audioElement.src === '') {
        if (event.key === ' ') {
            playingSong[0].innerHTML = 'song not selected';
        }
    } else {
        if (event.key === ' ') {
            if (audioElement.paused) {
                audioElement.play();
                document.getElementById('playButton').style.display = 'none';
                document.getElementById('pauseButton').style.display = 'block';
                gif.style.opacity = 1;
            } else {
                audioElement.pause();
                document.getElementById('playButton').style.display = 'block';
                document.getElementById('pauseButton').style.display = 'none';
                gif.style.opacity = 0;
            }

        }
    }
});

document.getElementById('next').addEventListener('click',()=>{
    if(index>4){
        index = 1;

    }else{
        index += 1;
    }
        audioElement.src = `song/${index}.mp3`;
        audioElement.play();
        document.getElementById('playButton').style.display = 'none';
        document.getElementById('pauseButton').style.display = 'block';
        gif.style.opacity = 1;
        console.log(playingSong[0]);
        let currentSongName = songs[index - 1].songName.slice(0,17)+'.....';
        playingSong[0].innerHTML = currentSongName;
        console.log(currentSongName)
})


document.getElementById('previous').addEventListener('click',()=>{
    if(index<0){
        index = 5;

    }else{
        index -= 1;
        
    }

    if(index<=0){
        index = 5;

    }
        audioElement.src = `song/${index}.mp3`;
        audioElement.play();
        document.getElementById('playButton').style.display = 'none';
        document.getElementById('pauseButton').style.display = 'block';
        gif.style.opacity = 1;
        console.log(playingSong[0]);
        let currentSongName = songs[index - 1].songName.slice(0,17)+'.....';
        playingSong[0].innerHTML = currentSongName;
        console.log(currentSongName)
})