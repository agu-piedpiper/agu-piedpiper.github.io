"use strict";

{
    const hamburger = document.getElementById("hamburger");
    const hamburgerTop = document.querySelector("#hamburger > .top1");
    const hamburgerBottom = document.querySelector("#hamburger > .bottom1");
    const closeTop = document.querySelector("#hamburger > .top2");
    const closeBottom = document.querySelector("#hamburger > .bottom2");
    const menu = document.getElementById("menu");
    const menuContents = document.querySelectorAll("#menu>ul>li")

    hamburger.addEventListener("click",()=>{
        hamburgerTop.classList.toggle("close");
        hamburgerBottom.classList.toggle("close");
        closeTop.classList.toggle("close");
        closeBottom.classList.toggle("close");
        menu.classList.toggle("show");
        menuContents.forEach((menuContent,i) => {
            menuContent.classList.toggle("slide")
            menuContent.style = `animation-delay:.${i*2}s;`
        });
    })

    const accordions = document.querySelectorAll(".accordion")
    const answers = document.querySelectorAll(".accordion > .answer")
    const landmarks = document.querySelectorAll(".question > .landmark")

    accordions.forEach((accordion,i) => {   
        accordion.addEventListener("click",()=>{
            answers[i].classList.toggle("open");
            if(landmarks[i].innerHTML === "+"){
                landmarks[i].innerHTML = "-"
            }else{
                landmarks[i].innerHTML = "+"
            }
        });
    });
}