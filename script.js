let taskbar =document.getElementsByClassName('taskbar')[0]
let startmenu =document.getElementsByClassName('startmenu')[0]
let leftIcon = document.getElementsByClassName('left')[0]; // Selecting the left icon

console.log("clicked");
leftIcon.addEventListener("click", () => {

    if(startmenu.style.bottom == "50px" )
    {
        startmenu.style.bottom ="-755px";
    }

    else
    {
        startmenu.style.bottom ="50px";
    }
} )