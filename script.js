console.log("Welcome To Spotify");

//Initialize The Variable
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));



let songs = [
    {songName: "Sweethearts-Track Tribe", filePath: "songs/1.mp3", coverpath: "./covers/1.jpg"},
    {songName: "Goblin", filePath: "songs/2.mp3", coverpath: "covers/3.jpg"},
    {songName: "Glo Fi-Windows of Ken", filePath: "songs/3.mp3", coverpath: "covers/5.jpg"},
    {songName: "HeadLands-National Sweetheart", filePath: "songs/4.mp3", coverpath: "covers/6.jpg"},
    {songName: "The-Reason-of-my-smile", filePath: "songs/1.mp3", coverpath: "covers/1.jpg"},
    {songName: "The-Reasons-of-my-smile", filePath: "songs/2.mp3", coverpath: "covers/3.jpg"},
    
]

songItems.forEach((element)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

})

// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1; 
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
})

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    
    //Update Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})