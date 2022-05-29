import {reviews} from './reviews.js'

/////////Carousel Events
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1024:{
            items:3
        }


    }
})


const carouselArrows = document.querySelector('.owl-nav');
const carouselArrowLeft = carouselArrows.children[0];
const carouselArrowRight = carouselArrows.children[1];

carouselArrowLeft.addEventListener('mouseenter', () => {activateCursor('Prev');})
carouselArrowLeft.addEventListener('mouseleave', () => {deactivateCursor();})

carouselArrowRight.addEventListener('mouseenter', () => {activateCursor('Next');})
carouselArrowRight.addEventListener('mouseleave', () => {deactivateCursor();})


 
//////////Review Events
let reviewIndex = 0;
const reviewsArrows = document.querySelector('.reviews-btn-container');
const leftArrow = reviewsArrows.children[0];
const rightArrow = reviewsArrows.children[1];

function dynamicReviews(){
    const reviewText = document.querySelector('.review-content');
    const reviewImg = document.querySelector('.review-img');
    const reviewName = document.querySelector('.review-name');

    reviewText.textContent = reviews[reviewIndex].desc;
    reviewImg.src = reviews[reviewIndex].image;
    reviewName.textContent = reviews[reviewIndex].name;
}

//Next Btn
rightArrow.addEventListener('mouseenter', () => {activateCursor('Next');})
rightArrow.addEventListener('mouseleave', () => {deactivateCursor();})

rightArrow.addEventListener('click', () => {
    const nextTl = gsap.timeline({defaults: {duration: 0.75}});
    nextTl.fromTo('.reviews-container', {opacity: 1, scale: 1}, {opacity: 0, scale:0.5})
    .add(() => {
        reviewIndex++;

        if(reviewIndex > reviews.length - 1){
            reviewIndex = 0;
        }
        dynamicReviews();

    })
    nextTl.fromTo('.reviews-container', {opacity: 0, scale:0.5}, {opacity: 1, scale: 1, delay: 0.2})
})



//Prev Btn
leftArrow.addEventListener('mouseenter', () => {activateCursor('Prev');})
leftArrow.addEventListener('mouseleave', () => {deactivateCursor();})

leftArrow.addEventListener('click', () => {
    const nextTl = gsap.timeline({defaults: {duration: 0.75}});
    nextTl.fromTo('.reviews-container', {opacity: 1, scale: 1}, {opacity: 0, scale:0.5})
    .add(() => {
        reviewIndex--;
        
        if(reviewIndex < 0){
            reviewIndex = reviews.length - 1;
        }
        dynamicReviews();

    })
    nextTl.fromTo('.reviews-container', {opacity: 0, scale:0.5}, {opacity: 1, scale: 1, delay: 0.2})
})


window.addEventListener('DOMContentLoaded', () => {
    dynamicReviews();
})