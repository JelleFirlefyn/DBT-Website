// const hero = document.querySelector('.hero');
const slider = document.querySelector(".slider");
const image = document.querySelector("#image");
const headline = document.querySelector(".headline");
const navigation = document.querySelector(".navigation");

const tl = new TimelineMax();

tl.fromTo(slider,1, {height: "0%"}, {height:"100%", ease: Power1.easeInOut});

tl.from(navigation,0.8,{y:"-1000%", ease: Power4.easeOut});

tl.fromTo(image,0.8, {y:"-200%"}, {y:"0%"}, "-=1");


// tl.from(headline,0.8,{y:"-1000%", ease: Power4.easeOut});
// tl.from(headline,0.8,{x:"-80%", ease: Power4.easeOut});