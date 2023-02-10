console.log("helooo");

//initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let flow = document.getElementById('flow');
let gif = document.getElementById('gif');
let capsule = Array.from(document.querySelectorAll('.capsule'));
let songPame = document.getElementById('songPame');
// let time = document.getElementsByClassName('time');

let songs = [
    {songName: 'Let me Love You', filePath:'songs/1.mp3', coverPath: 'covers/1.jpeg',songLength: `3:20`},
    {songName: 'Shape of You', filePath:'songs/2.mp3', coverPath: 'covers/2.jpeg',songLength: '3:37'},
    {songName: 'Unforgettable', filePath:'songs/3.mp3', coverPath: 'covers/3.jpg',songLength: '3:54'},
    {songName: 'Munni Badnam', filePath:'songs/4.mp3', coverPath: 'covers/4.jpg',songLength: '5:07'},
    {songName: 'Lean On', filePath:'songs/5.mp3', coverPath: 'covers/5.jpg', songLength: '2:56'},
    {songName: 'Valentine', filePath:'songs/6.mp3', coverPath: 'covers/6.jpeg',songLength: '3:16'},
    {songName: 'Shiver', filePath:'songs/7.mp3', coverPath: 'covers/7.jpeg',songLength: '5:04'},
    {songName: 'Heartless', filePath:'songs/8.mp3', coverPath: 'covers/8.jpeg',songLength: '3:21'},
    {songName: 'Circles', filePath:'songs/9.mp3', coverPath: 'covers/9.jpeg',songLength: '3:35'},
    {songName: 'Gold', filePath:'songs/10.mp3', coverPath: 'covers/10.jpeg',songLength: '4:19'},
]

capsule.forEach((element, i) => {
    // console.log(element,i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('name')[0].innerText = songs[i].songName;
    element.getElementsByClassName('time1')[0].innerText = songs[i].songLength;
});

//play the song
masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        gif.style.opacity = 0;
    }
}
);

audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    flow.value = progress;
})

flow.addEventListener('change', () => {
    audioElement.currentTime = (flow.value * audioElement.duration)/100;
});

Array.from(document.getElementsByClassName('icon')).forEach((element) => {
    element.addEventListener('click',(e) =>{
        songIndex = parseInt(e.target.id);
        audioElement.src =  `songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
    console.log(songIndex);
        songPame.innerText = songs[songIndex-1].songName;
        audioElement.play();
        gif.style.opacity = 1;
    }  )
})

document.getElementById('next').addEventListener('click', () => {
    if(songIndex > 10){
        songIndex = 1;
    }
    else{
        songIndex += 1;
    }
    audioElement.src =  `songs/${songIndex}.mp3`;
    console.log(songIndex);
    songPame.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
})

document.getElementById('prev').addEventListener('click', () => {
    if(songIndex < 1){
        songIndex = 10;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src =  `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    console.log(songIndex);
    songPame.innerText = songs[songIndex-1].songName;
    audioElement.play();
});