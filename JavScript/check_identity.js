var pwd = "Ds"
var link = "https://docs.google.com/document/d/1ukBMDM4f46yrtIGQd_oDZg5mYfK5gLFtKfk_CUoJ_kE/edit?usp=sharing"

function check_identity(){
    var user = document.getElementById("user_identification");
    var o_link = document.querySelector(".password")
    //console.log(o_link)
    //console.log(pwd)
    //console.log(user.value)
    if(user.value == pwd){
        console.log("Correct pwd")
        o_link.setAttribute("action",link)
    }
    else{
        window.alert("Please enter the correct credential")
        console.log("Wrong pwd")
        return false
    }
}