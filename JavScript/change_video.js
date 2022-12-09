var listVideo = document.querySelectorAll('.video-list .vid');
var mainVideo = document.querySelector('.main-video iframe');
var title = document.querySelector('.main-video .title');

console.log(listVideo)
console.log(mainVideo)
console.log(title)

listVideo.forEach(video =>{
    video.onclick = () => {
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
        if(video.classList.contains('active')){
            console.log(video.children)
            var src = video.children[2].getAttribute('href');
            mainVideo.src = src;
            var text = video.children[1].innerHTML;
            title.innerHTML = text;
        }
    };
});