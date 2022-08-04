let bird1=document.querySelector(".bird1"),
    bird2=document.querySelector(".bird2"),
    header=document.querySelector("header"),
    cloud1=document.querySelector(".cloud1"),
    cloud2=document.querySelector(".cloud2"),
    cloud3=document.querySelector(".cloud3"),
    cloud4=document.querySelector(".cloud4"),
    cloud5=document.querySelector(".cloud5"),
    mountain=document.querySelector(".mountain"),
    water=document.querySelector(".water"),
    explore=document.querySelector(".explore"),


    head=document.querySelector(".hero__text");

window.addEventListener('scroll',()=>{
    let ypos=window.scrollY;
    head.style.top = 50 + ypos * -0.5   + "%";

    bird1.style.top =  ypos * -1.5   + "px";
    bird1.style.left =  ypos * 2   + "px";

    cloud1.style.left =  ypos * 4.5   + "px";

    cloud2.style.left =  ypos * 3.5   + "px";
    cloud3.style.left =  ypos * 2.5 + "px";
    cloud4.style.left =  ypos * 1.5   + "px";
    cloud5.style.left =  ypos * 0.5   + "px";

    mountain.style.top =  ypos * -0.0005   + "px";
    water.style.top =  ypos * .07   + "px";


    explore.style.marginTop =  50 + ypos * 2.5  + "px";





    bird2.style.top =  ypos * -1.5   + "px";
    bird2.style.left =  ypos * -1.5   + "px";

    header.style.top =  ypos * .5   + "px";



})


const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    console.log(containerDimensions);
    console.log(containerWidth);
    console.log(i);




    nxtBtn[0].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[0].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})