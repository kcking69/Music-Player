const range = document.getElementById('range')
const play = document.getElementById('play')
const audio = document.getElementById('audio')
const musicImage = document.getElementById('music-image')

 play.addEventListener('click', ()=>{
     if (play.classList.contains('fa-pause')) {
         audio.pause()
         play.classList.remove('fa-pause')
         play.classList.add('fa-play')
         musicImage.classList.remove('rotate')
        }else{
        audio.play()
        play.classList.remove('fa-play')
        play.classList.add('fa-pause')
        musicImage.classList.add('rotate')
    }
 })

    audio.onloadedmetadata = ()=>{
        range.max = audio.duration
        range.value = audio.currentTime
    }

setInterval(() => {
    range.value = audio.currentTime
}, 500);

range.addEventListener('change', ()=>{
    audio.play()
    audio.currentTime = range.value
    play.classList.add('fa-play')
    play.classList.remove('fa-pause')
})





























































