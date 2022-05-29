/////Javascript Begin Home Page/(All Pages)/////

//General Links and Cursor
document.body.style.cursor = 'none';

const cursor = document.querySelector('.cursor');
const cursorText = cursor.querySelector('span');
const links = document.querySelectorAll('a');


window.addEventListener('mousemove', (e) => {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
})

function activateCursor(text){
    cursor.classList.add('active');
    cursorText.textContent = text;
}

function deactivateCursor(){
    cursor.classList.remove('active');
    cursorText.textContent = 'Click';
}




links.forEach((link) => {
    link.addEventListener('mouseenter', () => {activateCursor('Click')})
    link.addEventListener('mouseleave', () => {deactivateCursor();})
})





////////Menu Events
const menuBtn = document.querySelector('.menu-btn');
const menuIcon = document.querySelector('.menu-btn i');
const navMenu = document.querySelector('.nav-menu');


menuBtn.addEventListener('mouseenter', () => {activateCursor('Click')})
menuBtn.addEventListener('mouseleave', () => {deactivateCursor();})


menuBtn.addEventListener('click', () => {
   navMenu.classList.toggle('active');
   menuBtn.classList.toggle('active');
 
   if(menuBtn.classList.contains('active')){
       menuBtn.innerHTML = '<i class="fas fa-times"></i>';
       const navTl = gsap.timeline();

       navTl.fromTo('.menu-links li', {opacity: 0}, {opacity: 1, duration: 0.5, delay: 1, stagger: 0.1})

   } else {
       menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
       deactivateCursor();
   }
  
})




///////GSAP Animations///////
const tl = gsap.timeline();

tl.fromTo('.logo', 1, {opacity: 0, y:'-100px'}, {opacity: 1, y:'-0px'})
tl.fromTo('.menu-btn', 1, {opacity: 0, y:'-100px'}, {opacity: 1, y:'-0px'}, '<')
tl.fromTo('.header-content', 1, {opacity: 0, y:'-100px'}, {opacity: 1, y:'-0px'}, '<')
tl.fromTo('.header-img', 1.5, {opacity: 0, scale: 0.5}, {opacity: 1, scale: 1, ease:"elastic.out(1, 0.3)"})


//About Us Animations 
const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.about-section',
        start: '-20%',
        end: '100%'
    }
})

const aboutElements = [...document.querySelectorAll('.about-grid > *')];
aboutElements.forEach((element) => {
    const cover = document.createElement('div');
    cover.classList.add('about-cover');
    element.appendChild(cover);

    tl2.fromTo(cover, 0.75, {width: '100%'}, {width: '0%'})
})



//Service Animations
const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.services-section',
        start: '-50%',
        end: '100%'
    }
})

gsap.set('.service-img-cover', {visibility: 'visible'})
tl3.fromTo('.service-img-cover', 0.75, {height: '0px'}, {height: '100%'})
tl3.fromTo('.service-item', {visibility: 'hidden'}, {visibility: 'visible'})
tl3.fromTo('.service-img-cover', 0.5, {opacity: 1}, {opacity: 0})



//Our Work Animations
const tl4 = gsap.timeline({
    defaults: {duration: 0.75},

    scrollTrigger: {
        trigger: '.our-work-section',
        start: '-20%', 
        end: '100%'
    }
})

tl4.fromTo('.our-work-content', {opacity: 0}, {opacity: 1, stagger: 0.3});
tl4.fromTo('.our-work-content h3', {opacity: 0}, {opacity: 1, stagger: 0.3}, '<20%');
tl4.fromTo('.color', {width: 0}, {width: '60px'}, '<50%')


//Analytics Animations
let satisfiedClients = 159;
let increaseTraffic = 139;
let increaseRev = 179;

let index = 0;

const satisfiedClientsEl = document.querySelector('.clients');
const increaseTrafficEl = document.querySelector('.traffic');
const increaseRevEl = document.querySelector('.revenue');

const tl5 = gsap.timeline({
    defaults: {duration: 0.75},

    scrollTrigger: {
        trigger: '.analytics-section',
        start: '-60%', 
        end: '100%'
    }
})

tl5.to('.analytics-section', {visibility: 'visible'})
.add(() => {
    increaseNumbers(satisfiedClientsEl, satisfiedClients);
    increaseNumbers(increaseTrafficEl, increaseTraffic);
    increaseNumbers(increaseRevEl, increaseRev);
})

function increaseNumbers(element, analytic){
    let timeValue = null;

    timeValue = setInterval(()=> {
        index++;
        element.textContent = index;
        if(index > analytic){
            clearInterval(timeValue);
        }
    }, 20)


}

//Reviews Animations
const tl6 = gsap.timeline({
    defaults: {duration: 0.75},

    scrollTrigger: {
        trigger: '.reviews',
        start: '-25%', 
        end: '100%'
    }
})

tl6.fromTo('.reviews-container', {scale: 0}, {scale: 1})


//////Barba Page Transitions//////
barba.init({
    
    transitions: [
        {
            leave({current, next}){
               const done = this.async();
               const tl = gsap.timeline({defaults: {duration: 0.75}});
               tl.fromTo(current.container, 0.5, {opacity: 1}, {opacity: 0})
               tl.fromTo('.transform', 1, {y: 0}, {y: '100%', stagger: 0.3, onComplete: done})
               console.log(current)
            },

            enter({current, next}){
                const done = this.async();
                const tl = gsap.timeline({defaults: {duration: 0.75}});
                window.scrollTo(0,0)
                tl.fromTo('.transform', 1, {y: '100%'}, {y: 0, stagger: 0.3, onComplete: done}) 
                //tl.fromTo(next.container, 1, {opacity: 0}, {opacity: 1})
            
                setTimeout(() => {
                    document.location.reload();
                }, 1000)
            }
        },
    ]
})













