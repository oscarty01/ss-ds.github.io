var main_video_height = document.getElementById('main-video').clientHeight;
var height = screen.height;
var width = screen.width;
console.log(main_video_height);
console.log(height)
console.log(width)

    document.getElementById("video-list").style.height = main_video_height + "px";

    console.log(document.getElementById("video-list").style)

if(width <= 770){
    var new_height = height - main_video_height - 170
    console.log(new_height)
    document.getElementById("video-list").style.height = new_height + "px";
    console.log(document.getElementById("video-list").style)
}       