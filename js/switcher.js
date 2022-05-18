/**** TOOGLER STYLE SWITCHER */

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler")
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher-1").classList.toggle("open")
})

 /**** DARK MODE */

const dayNight = document.querySelector(".day-night")
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun")
    dayNight.querySelector("i").classList.add("fa-moon")
    document.body.classList.toggle("dark")
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun")
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon")
    }
})


/******* COLORS */
document.querySelectorAll(".colors .color").forEach(color =>{
    color.onclick = () => {
        let background = color.style.background
        document.querySelector(":root").style.setProperty("--theme-default-color", background)
    }
})

/****** MENU TOGGLER */
const hamburger = document.querySelector(".hamburger")
hamburger.addEventListener("click", () => {
    hamburger.querySelector("i").classList.toggle("fa-xmark")
    hamburger.querySelector("i").classList.add("fa-bars")
    document.querySelector(".dashboard").classList.toggle("active-menu")
    document.querySelector(".content-box").classList.toggle("active-menu")
})
window.addEventListener("load", () => {
    if(document.querySelector(".dashboard").classList.contains("active-menu")){
        hamburger.querySelector("i").classList.add("fa-xmark")
    }
    else{
        hamburger.querySelector("i").classList.add("fa-bars")
    }
})

/***** CLOSE AHREF */



let linkClose = document.querySelectorAll(".link")
const dashboard = document.querySelector(".dashboard")
const ContentBox = document.querySelector(".content-box")


linkClose.forEach(function(oneLink){
    oneLink.addEventListener("click", () => {
        dashboard.classList.remove("active-menu")
        ContentBox.classList.remove("active-menu")
        hamburger.querySelector("i").classList.toggle("fa-xmark")
    })

})
