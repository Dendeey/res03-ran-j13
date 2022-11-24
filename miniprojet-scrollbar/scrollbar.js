
let section1 = document.getElementById("red");
let section2 = document.getElementById("orange");
let section3 = document.getElementById("yellow");
let section4 = document.getElementById("green");
let section5 = document.getElementById("blue");
let section6 = document.getElementById("purple");

let position1 = section1.getBoundingClientRect().top;
console.log(position1);
let position2 = section2.getBoundingClientRect().top;
let position3 = section3.getBoundingClientRect().top;
let position4 = section4.getBoundingClientRect().top;
let position5 = section5.getBoundingClientRect().top;
let position6 = section6.getBoundingClientRect().top;
let sections = document.querySelectorAll("body > main >section");
/*
function nextPos(current){
    for(let i = 0; i < ){
        if(current.deltaY < 0){
            
        }
    }
}

function prevPos(current){
    if(current.deltaY < 0){
        
    }
}

for(let i = 0; i < sections.length; i++){
    sections[i].addEventListener("wheel", function(){
        if(event.deltaY > 0) // je vais vers le bas
        {
            scroll(position1, position2);
            console.log("Scrolled!");
        }
        else if(event.deltaY < 0) // je vais vers le haut
        {
            scroll(position2, position1);
            console.log("Scrolled!");
        }
    });
}
*/

