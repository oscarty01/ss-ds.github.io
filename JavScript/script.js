var show = document.getElementById("nav-link");

function show_menu(){
    show.style.right = "0";
}

function close_menu(){
    show.style.right = "-200px";
}

let userAgent = navigator.userAgent;
let browser;

if(userAgent.match(/edg/i)){
    browser = "edge";
}else if(userAgent.match(/firefox|fxios/i)){
    browser = "firefox";
}else if(userAgent.match(/opr\//i)){
    browser = "opera";
}else if(userAgent.match(/chrome|chromium|crios/i)){
    browser = "chrome";
}else if(userAgent.match(/safari/i)){
    browser = "safari";
}else{
    alert("Other browser");
}

const browser_logos = document.querySelector(`.browser_logos .${browser}`);

if(browser_logos){
    browser_logos.style.opacity = "1";
}