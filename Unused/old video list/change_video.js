var listVideo = document.querySelectorAll('.video-list .vid');
var mainVideo = document.querySelector('.main-video video');
var title = document.querySelector('.main-video .title');
var link  = document.querySelector('.main-video .link');


listVideo.forEach(video =>{
    video.onclick = () => {
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
        if(video.classList.contains('active')){
            var src = video.children[0].getAttribute('src');
            mainVideo.src = src;
            var text = video.children[1].innerHTML;
            title.innerHTML = text;
            var changed_link = video.children[2].getAttribute('href');
            link.href = changed_link
        }
    };
});