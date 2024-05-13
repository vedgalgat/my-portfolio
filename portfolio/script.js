// This is js for moveing our strings:

var typed = new Typed('#element', {
  strings: ["Web Developer!", "Web Designer!", "Front-end Developer!"],
  typeSpeed: 80,
  loop: true,
});

// This code for will give alert , When click on submit button:

document.querySelector(".ved").addEventListener("click", function () {
  alert("Thank you! Your request has been submited");
})

// Hamburger icon, when screen width 600px then show the hamburger icon

let ul=document.querySelector("ul")
let icon=document.querySelector(".icon")

icon.addEventListener("click",()=>{

  ul.classList.toggle("show")

  if(ul.className==="show"){
    document.querySelector("#bar").className="ri-close-line"
  }
  else{
    document.querySelector("#bar").className="ri-menu-3-line"
  }
})

var body=document.querySelector("body")


body.addEventListener("mousemove", (dets) => {

  let offsetX = -12; 
  let offsetY = -12; 

  gsap.to(".cursor_anim", {
    x: dets.x + offsetX,
    y: dets.y + offsetY,
    duration: 0.7,
    ease:"power4.out"
  });
});

var tl=gsap.timeline();

var a=document.querySelector("ul")

tl.from("a",{
  y:-200,
  opacity:0,
  duration:0.5,
  delay:1,
  scale:0.1,
  stagger:0.2
})