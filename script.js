var divLength =document.querySelectorAll(".song").length;


for(var i =0; i<divLength; i++){
    var demo = document.querySelectorAll(".song")[i].addEventListener("click",playSong);
     var demo = document.querySelectorAll(".song")[i].addEventListener("dblclick",stopSong);
}

// include the song by using audio object
// now give source to the song
var song1 = new Audio();
song1.src = "music/one.mp3";

var song2 = new Audio();
song2.src = "music/two.mp3";

var song3 = new Audio();
song3.src = "music/three.mp3";

var song4 = new Audio();
song4.src = "music/four.mp3";

var song5 = new Audio();
song5.src = "music/five.mp3";

/*var song6 = new Audio();
song6.src = "music/one.mp3";

var song7 = new Audio();
song7.src = "music/two.mp3";

var song8 = new Audio();
song8.src = "music/three.mp3";

var song9 = new Audio();
song9.src = "music/four.mp3";

var song10 = new Audio();
song10.src = "music/five.mp3";*/



function playSong()
{
    

    var songId = this.innerHTML;
    /*console.log(songId); only for checking purpose*/
    
    switch(songId){
        case 'a':
            song1.play();
            break;
        case 'b':
            song2.play();
            break;
        case 'c':
            song3.play();
            break;
        case 'd':
            song4.play();
            break;
        case 'e':
            song5.play();
            break;
        case 'f':
            song1.play();
            break;
        case 'g':
            song2.play();
            break;
        case 'h':
            song3.play();
            break;
        case 'i':
            song4.play();
            break;
        case 'j':
            song5.play();
            break;
        default:
            console.log('not found')
            break;
    }
}



function stopSong()
{
    
    
     var songId = this.innerHTML;
    /*console.log(songId); only for checking purpose*/
    
    switch(songId){
        case 'a':
            song1.pause();
            break;
        case 'b':
            song2.pause();
            break;
        case 'c':
            song3.pause();
            break;
        case 'd':
            song4.pause();
            break;
        case 'e':
            song5.pause();
            break;
        case 'f':
            song1.pause();
            break;
        case 'g':
            song2.pause();
            break;
        case 'h':
            song3.pause();
            break;
        case 'i':
            song4.pause();
            break;
        case 'j':
            song5.pause();
            break;
        default:
            console.log('not found')
            break;
    }
}
