let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let musicSrc = document.getElementById("musicSrc")
let songImg = document.getElementById("songImg")
let songTitle = document.getElementById("songTitle")
let artistName = document.getElementById("artistName")
let musicUi = document.getElementById("music-player")
// let homeUi = document.getElementById("home")
// let optionsUi = document.getElementById("options")
let backIcon = document.getElementById("backIcon")
let startedPlaying = false
let shufflePlaylist = {}

const songs = {
    "playlist": [
        
        {
         
            "title": "You Belong With Me",
            "artist": "Taylor Swift",
            "album": "Fearless (Taylor's Version)",
            "code": "youbelong.mp3",
            "cover": "fearless.jpg" ,
            "color": "#e8d8a6"

        },
        {
            
            "title": "Teenage Dream",
            "artist": "Katy Perry",
            "album": "Teenage Dream",
            "code": "teenagedream.mp3",
            "cover": "teenagedream.jpg" ,
            "color":"#fae1e5"
   
        },
        {
            
            "title": "Enchanted",
            "artist": "Taylor Swift",
            "album": "Speak Now (Taylor's Version)",
            "code": "youenchantedme.mp3",
            "cover": "speaknow.jpg",
            "color":"#602c67"
   
        },
        {
            
            "title": "The Way I Loved You",
            "artist": "Taylor Swift",
            "album": "Fearless (Taylor's Version)",
            "code": "thewayiluv.mp3",
            "cover": "fearless.jpg",
            "color": "#e8d8a6"

   
        },
        {
            
            "title": "King of My Heart",
            "artist": "Taylor Swift",
            "album": "Reputation",
            "code": "kingofmyheart.mp3",
            "cover": "reputation.jpg",
            "color": "#bebebe"
   
        },
        {
            
            "title": "Wildest Dreams",
            "artist": "Taylor Swift",
            "album": "1989 (Taylor's Version)",
            "code": "wildestdreams.mp3",
            "cover": "1989.jpg",
            "color": "#c3b9b7"
   
        },
        {
            
            "title": "Getaway Car",
            "artist": "Taylor Swift",
            "album": "Reputation",
            "code": "getawaycar.mp3",
            "cover": "reputation.jpg",
            "color": "#bebebe"
   
        },
        {
            
            "title": "pov",
            "artist": "Ariana Grande",
            "album": "positions",
            "code": "pov.mp3",
            "cover": "positions.jpg",
            "color": "#dad7d1"
   
        },
        {
            
            "title": "Playing With Fire",
            "artist": "BLACKPINK",
            "album": "Square Two",
            "code": "playingwithfire.mp3",
            "cover": "squaretwo.jpeg",
            "color": "#212121"
   
        },
        {
            
            "title": "You and I",
            "artist": "Park Bom",
            "album": "To Anyone",
            "code": "uanditogether.mp3",
            "cover": "toanyone.jpg",
            "color": "#c43787"
   
        },
        
        {
            
            "title": "River",
            "artist": "Miley Cyrus",
            "album": "Endless Summer Vacation",
            "code": "river.mp3",
            "cover": "endlesssummer.jpg",
            "color": "#8b9ebb"
   
        },
        {
            
            "title": "Love on the Brain",
            "artist": "Rihanna",
            "album": "Anti",
            "code": "brainluv.mp3",
            "cover": "anti.jpg",
            "color": "#c7c8cb"
   
        },
        {
            
            "title": "Crush",
            "artist": "Katy Perry",
            "album": "143",
            "code": "crush.mp3",
            "cover": "143.jpg",
            "color": "#adc0e5"
   
        },
        {
            
            "title": "Outta My Head",
            "artist": "Jeon Somi",
            "album": "Birthday",
            "code": "outtamyhead.mp3",
            "cover": "birthday.jpg",
            "color": "#e768c9"
   
        },
        {
            
            "title": "BIRDS OF A FEATHER",
            "artist": "Billie Eilish",
            "album": "HIT ME HARD AND SOFT",
            "code": "birdsfeather.mp3",
            "cover": "hardandsoft.jpg",
            "color": "#0c1014"
   
        },
        
        
        
        
    ]
}
let actualsong = songs.playlist

let songIndex = 0
song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}


function playPause(){
    if(backIcon.classList.contains("fa-shuffle")){
        backIcon.classList.remove("fa-shuffle")
        backIcon.classList.add("fa-backward")
    }
    if(actualsong[songIndex].color){
        console.log("Musica possui a cor: "+actualsong[songIndex].color)
        musicUi.style.background = actualsong[songIndex].color
    }
    else{
        musicUi.style.background = "#ffe0e5"
    }


    
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause")
        ctrlIcon.classList.add("fa-play")
    }
    else{
        song.play();
        ctrlIcon.classList.remove("fa-play")
        ctrlIcon.classList.add("fa-pause")
        
        if(startedPlaying == false){
            
            console.log("clicado")
            song.pause()
            song.src = "media/"+actualsong[songIndex].code
        
            songImg.src = "media/"+ actualsong[songIndex].cover
            console.log(actualsong[songIndex])
            songTitle.innerHTML = actualsong[songIndex].title
            artistName.innerHTML = actualsong[songIndex].artist
            song.play()
            console.log(startedPlaying)
            startedPlaying = true
        }
        
    }



}
function previousSong(){
    
    // Inicia a playlist de shuffle. 
    if(backIcon.classList.contains("fa-shuffle")){
        console.log("Iniciando a lista em shuffle")
        shuffleArray(songs.playlist)
        console.log(songs.playlist)
        playPause()
    }
    console.log("index antes: " + songIndex)
    if(startedPlaying == true){
        if(songIndex == 0){
        
            song.load()
            song.play()
        }
        else{
            songIndex--
            if(actualsong[songIndex].color){
                console.log("Musica possui a cor: "+actualsong[songIndex].color)
                musicUi.style.background = actualsong[songIndex].color
            }
            else{
                musicUi.style.background = "#ffe0e5"
            }



            console.log("clicado")
            song.pause()
            song.src = "media/"+actualsong[songIndex].code
            artistName.innerHTML = actualsong[songIndex].artist
            songImg.src = "media/"+ actualsong[songIndex].cover
            console.log(actualsong[songIndex])
            songTitle.innerHTML = actualsong[songIndex].title
            ctrlIcon.classList.remove("fa-play")
            ctrlIcon.classList.add("fa-pause")
            currentMinutes = 0 
            currentSeconds = 0
            song.play()
        }
    
    }
    console.log("index depois: " + songIndex)
    
}
function nextSong(){
    if(actualsong.length<=songIndex+1){
        console.log("acabou")
        console.log(actualsong.length)
        console.log(songIndex)
        songIndex = -1
        
    }
    // Remove o ícone de shuffle em caso da existencia de um.
    if(backIcon.classList.contains("fa-shuffle")){
        // Troca de ícone.
        backIcon.classList.remove("fa-shuffle")
        backIcon.classList.add("fa-backward")

    }

    // Troca a cor de acordo com a cor inserida pelo usuário, caso não exista cor em algum ítem da playlist ele retorna a cor padrão.
    if(startedPlaying == false){
        if(actualsong[songIndex].color){
            // console.log(homeUi.style.color)
            // optionsUi.style.color = actualsong[songIndex].color
            // homeUi.style.color = actualsong[songIndex].color
            // console.log("Musica possui a cor: "+actualsong[songIndex].color)
            musicUi.style.background = actualsong[songIndex].color
            
            
        }
        else{
            musicUi.style.background = "#ffe0e5"
        }



        ctrlIcon.classList.remove("fa-play")
        ctrlIcon.classList.add("fa-pause")
        song.pause()
        song.src = "media/"+actualsong[songIndex].code
    
        songImg.src = "media/"+ actualsong[songIndex].cover
        console.log(actualsong[songIndex])
        songTitle.innerHTML = actualsong[songIndex].title
        artistName.innerHTML = actualsong[songIndex].artist
        currentMinutes = 0 
        currentSeconds = 0
        song.play()
        console.log(startedPlaying)
        startedPlaying = true
    }else{
        // musicSrc.src = "media/thewayiluv.flac"
        // song.play
        songIndex++

        // Tratamento de cor da UI
        if(actualsong[songIndex].color){
            console.log("Musica possui a cor: "+actualsong[songIndex].color)
            musicUi.style.background = actualsong[songIndex].color
        }
        else{
            musicUi.style.background = "#ffe0e5"
        }



        console.log("clicado")
        song.pause()
        song.src = "media/"+actualsong[songIndex].code
        
        songImg.src = "media/"+ actualsong[songIndex].cover
        console.log(actualsong[songIndex])
        songTitle.innerHTML = actualsong[songIndex].title
        artistName.innerHTML = actualsong[songIndex].artist
        ctrlIcon.classList.remove("fa-play")
        ctrlIcon.classList.add("fa-pause")
        song.play()
    }
}


if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
        let currentMinutes = Math.floor(song.currentTime / 60);
        let currentSeconds = Math.floor(song.currentTime % 60);
        
        if (currentSeconds < 10) {
            currentSeconds = "0" + currentSeconds;
        }
        


        document.querySelector(".currentTime").textContent = currentMinutes + ":" + currentSeconds;
        
        if(progress.max == song.currentTime && startedPlaying){
            console.log("Acabou")
            nextSong()
        }
        
        
        
    }, 1000);
    
    
}


progress.onchange = function (){
    song.play()
    song.currentTime = progress.value
    if(ctrlIcon.classList.contains("fa-play")){
        ctrlIcon.classList.remove("fa-play")
        ctrlIcon.classList.add("fa-pause")
    }
    
}

// Função de shuffle para o array de músicas
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));  // Escolhe um índice aleatório
        [array[i], array[j]] = [array[j], array[i]];    // Troca os elementos de lugar
    }
}

song.onloadedmetadata = function() {
    if(startedPlaying){
   
        progress.max = song.duration;  // Define o valor máximo do progresso baseado na duração
        let totalMinutes = Math.floor(song.duration / 60);  // Calcula os minutos totais
        let totalSeconds = Math.floor(song.duration % 60);  // Calcula os segundos restantes
        
        if (totalSeconds < 10) {
            totalSeconds = "0" + totalSeconds;
        }
        
        document.querySelector(".songTime").textContent = totalMinutes + ":" + totalSeconds;
}
};