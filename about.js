const aboutTl = gsap.timeline({defaults: {duration: 1}});
aboutTl.fromTo('.about-header-title', {opacity: 0, y:'-100px'}, {opacity: 1, y:0});



//About Page 
const aboutTl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.about-page-section',
        start: '-60%', 
        end: '100%'
    }
})

aboutTl2.fromTo('.about-page-section p', {opacity: 0, y:'50px'}, {opacity: 1, y:0});



const aboutTl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.about-1',
        start: '-30%', 
        end: '100%'
    }
})

const aboutItems = [...document.querySelectorAll('.about-1-grid > *')];
aboutItems.forEach((item) => {
    const cover = document.createElement('div')
    cover.classList.add('about-item-cover');
    item.appendChild(cover)
    
    aboutTl3.fromTo(cover, 0.75, {width: '100%'}, {width: '0%'}, '<')
})



/*aboutTl3.fromTo('.about-item-cover', 1.5, {opacity: 1}, {opacity: 0});
aboutTl3.fromTo('.about-1-img', {opacity: 0}, {opacity: 1}, '<')
aboutTl3.fromTo('.about-1-img', {scale: 0}, {scale: 1}, '<')*/