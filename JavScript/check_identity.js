var a1 = "login"
var a2 = "duty"
var a3 = "ds10bean"
var link_1 = "https://docs.google.com/document/d/1ukBMDM4f46yrtIGQd_oDZg5mYfK5gLFtKfk_CUoJ_kE/edit?usp=sharing"
var link_2 = "https://drive.google.com/drive/folders/1-xjbtUKD68Jj74wjVOECSBfOjUbXaTj3?usp=sharing"
var link_3 = "./Media/Backup/ds.txt"

function check_identity(){
    var user = document.getElementById("user_identification");
    var o_link = document.querySelector(".password")
    //console.log(o_link)
    //console.log(pwd)
    //console.log(user.value)
    if(user.value.toLowerCase().trim() == a1){
        console.log("a1")
        o_link.setAttribute("action",link_1)
        return true
    }
    else if(user.value.toLowerCase().trim() == a2){
        console.log("a2")
        o_link.setAttribute("action",link_2)
        return true
    }
    else if(user.value.toLowerCase().trim() == a3){
        console.log("a3")
        o_link.setAttribute("action",link_3)
        return true
    }
    else{
        window.alert("Invalid Ident Code")
        console.log("Invalid")
        return false
    }
}