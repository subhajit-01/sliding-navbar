let menuBtn =document.querySelector("#menu-btn")
let closeBtn=document.querySelector("#close-btn")
let navSection =document.querySelector(".nav-section")

let links =document.querySelectorAll("#links")

let tl=gsap.timeline()
tl.pause()




tl.to(navSection,{
    top:0,
    duration:.7,  
})

tl.from(".logo-2 h1",{
    duration:.3,
    stagger: 0.2,
    opacity:0
})

tl.from(links,{
    x:100,
    duration:.3,
    stagger: 0.2,
    opacity:0
})
tl.from(closeBtn,{
    x:10,
    duration:.3,
    stagger: 0.2,
    opacity:0
})





menuBtn.addEventListener("click",()=>{
    tl.play() 
})
closeBtn.addEventListener("click",()=>{
    tl.reverse()
})