//Browser detection
let userAgent = navigator.userAgent;
console.log(userAgent)
let browser;

if(userAgent.match(/edg/i)){
    browser = "edge";
}else if(userAgent.match(/firefox|fxios/i)){
    browser = "firefox";
}else if(userAgent.match(/opr\//i)){
    browser = "opera";
}else if(userAgent.match(/chrome|chromium|CriOS/i)){
    browser = "chrome";
}else if(userAgent.match(/safari/i)){
    browser = "safari";
}else{
    window.alert("Unidentified browser. Some function may not work as expected.");
}
const browser_logos = document.querySelector(`.browser_logos .${browser}`);
if(browser_logos){
    browser_logos.style.opacity = ".9";
}