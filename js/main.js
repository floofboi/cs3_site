/*
programs to code: 
    dark/light mode

    surveys stuff (subtopic 4)

    side navbar

    show time and date

    comments box thing
*/


var a = document.getElementsByTagName("a");
var sb = document.getElementById("sidebar");
var sbEnable = false;
var theme = 0;

function darkMode(){
    document.body.style.backgroundColor = "#212121";
    document.body.style.color = "#fff";
    sb.style.backgroundColor = "#434343"
    for(var i = 0; i < a.length; i++){
        a[i].style.color = "#fff";
    }
}

function lightMode(){
    document.body.style.backgroundColor = "initial";
    document.body.style.color = "initial";
    sb.style.backgroundColor = "#efefef";
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

function toggleSideBar(){
    if(!sbEnable){
        sb.style.width = "300px";
        sbEnable = true;
    } 
    else{
        sb.style.width = "0";
        sbEnable = false;
    }
}

function verify(){
    var value = document.getElementById("opiniontxt").value;
    if(value.length < 40){
        alert("Not enough characters!");
        return false;
    }
    alert("Thank you!");
    return true;
}


document.getElementById("changeTheme").addEventListener("click", changeTheme);
document.getElementById("sidenav").addEventListener("click", toggleSideBar);
document.getElementById("sidenavclose").addEventListener("click", toggleSideBar);