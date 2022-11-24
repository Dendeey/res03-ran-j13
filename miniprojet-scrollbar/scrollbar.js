
let section1 = document.getElementById("red");
let section2 = document.getElementById("orange");
let section3 = document.getElementById("yellow");
let section4 = document.getElementById("green");
let section5 = document.getElementById("blue");
let section6 = document.getElementById("purple");

let position1 = section1.getBoundingClientRect().top;
console.log(position1);
let position2 = section2.getBoundingClientRect().top;
console.log(position2);
let position3 = section3.getBoundingClientRect().top;
console.log(position3);
let position4 = section4.getBoundingClientRect().top;
console.log(position4);
let position5 = section5.getBoundingClientRect().top;
console.log(position5);
let position6 = section6.getBoundingClientRect().top;
console.log(position6);
let sections = document.querySelectorAll("body > main >section");


function GetNextPos(current){
    if(current.id==="red"){
        return document.getElementById("orange");
    }
    if(current.id==="orange"){
        return document.getElementById("yellow");
    }
    if(current.id==="yellow"){
        return document.getElementById("green");
    }
    if(current.id==="green"){
        return document.getElementById("blue");
    }
    if(current.id==="blue"){
        return document.getElementById("purple");
    }
    if(current.id==="purple"){
        return undefined;
    }
}

function GetPrevPos(current){
    if(current.id==="purple"){
        return document.getElementById("blue");
    }
    if(current.id==="blue"){
        return document.getElementById("green");
    }
    if(current.id==="green"){
        return document.getElementById("yellow");
    }
    if(current.id==="yellow"){
        return document.getElementById("orange");
    }
    if(current.id==="orange"){
        return document.getElementById("red");
    }
    if(current.id==="red"){
        return undefined;
    }
}


for(let i = 0; i < sections.length; i++){
    sections[i].addEventListener("wheel", function(event){
        
        let currentScrollPosition = document.documentElement.scrollTop; 
        
        if(event.deltaY > 0 && GetNextPos(sections[i]) != undefined) // je vais vers le bas
        {
            let NextPos = GetNextPos(sections[i]).getBoundingClientRect().top;
            scroll(0, NextPos + currentScrollPosition);
            console.log(scroll);
        }
        else if(event.deltaY < 0 && GetPrevPos(sections[i] != undefined)) // je vais vers le haut
        {
            let PrevPos = GetPrevPos(sections[i]).getBoundingClientRect().top;
            scroll(0, PrevPos + currentScrollPosition);
            console.log(scroll);
        }
    });
}


