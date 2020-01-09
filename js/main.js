/*
programs to code: 
    dark/light mode
    navbar
    time logger thing*???
*/

var theme = 0;
var a = document.getElementsByTagName("a")

function darkMode(){
    document.body.style.backgroundColor = "#212121";
    document.body.style.color = "#fff";
    
    for(var i = 0; i < a.length; i++){
        a[i].style.color = "#fff";
    }
}

function lightMode(){
    document.body.style.backgroundColor = "initial";
    document.body.style.color = "initial";
    for(var i = 0; i < a.length; i++){
        a[i].style.color = "initial";
    }
}

function changeTheme(){
    if(isNaN(theme) || theme < 0 || theme > 1) throw "invalid counter value";
    if(theme == 0){
        darkMode();
        theme = 1;
    } 
    else if(theme == 1){
        lightMode();
        theme = 0;
    }
}


document.getElementById("changeTheme").addEventListener("click", changeTheme);