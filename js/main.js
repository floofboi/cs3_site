/*
programs to code: 
    dark/light mode
    navbar

*/

var theme = 0;

function darkMode(){
    document.body.style.backgroundColor = "#212121";
    document.body.style.color = "#fff";
}

function lightMode(){
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#212121";
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