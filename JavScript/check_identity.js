var pwd = "DS1516"
var user = document.getElementById("user_identification");

function check_identity(){
    //console.log(pwd)
    //console.log(user.value)
    if(user.value = pwd){
        console.log("yes")
    }
    else{
        window.alert("Please enter the correct credential")
        console.log("no")
    }
}