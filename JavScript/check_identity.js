var pwd = "Ds"

function check_identity(){
    var user = document.getElementById("user_identification");
    //console.log(pwd)
    //console.log(user.value)
    if(user.value == pwd){
        console.log("yes")
    }
    else{
        window.alert("Please enter the correct credential")
        console.log("no")
        return false
    }
}