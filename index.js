// NavBar Scrolling //
const section=document.querySelectorAll('section')
const navLink=document.querySelectorAll('header nav a')
const btn = document.querySelector('.btn');
const videoContainer = document.querySelector('.video-container');
const close = document.querySelector('.close');

btn.addEventListener('click',()=>{
    videoContainer.classlist.add('show');
})

close.addEventListener('click',()=>{
    videoContainer.classList.remove('show');
})
window.onscroll=()=>{
    section.forEach(sec =>{
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id')
        if(top>=offset && top< offset + height){
            navLink.forEach(links=>{
                links.classlist.remove('active')
                document.querySelector('header nav[href*='+id+']').classlist.add('active')
         })
        }
    })

// Sticky Nav Bar //
    var header=document.querySelector('header')
header.classList.toggle("sticky",window.onscrollY>100)
menubar.classList.remove('bx-x')
navbar.classList.remove('active')
};
// Toggle Changer //
let menubar=document.querySelector('#menu')
let navbar=document.querySelector('.navbar')
menubar.oncick= ()=>{
    menubar.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}
// Text Changer //
var type=new Typed('.textline',{
    strings:["Dream","Believe","Achieve"],
    typepeed:100,
    backspeed:100,
    backDelay:2000,
    loop:true


})