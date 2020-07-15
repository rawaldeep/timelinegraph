let line = document.querySelector(".timelinearea");
let points = line.querySelectorAll("ul li .dot");
let par = document.querySelector('.slideshow-container');
let el = par.querySelectorAll('.mySlides');
let blocks = line.querySelectorAll('ul li')

points.forEach( point =>{
    point.addEventListener("click", ()=>{
        let position = point.parentNode.dataset.position - 1;
        points.forEach(oldpoints=>{
            if(oldpoints.classList.contains("activedot")){
                oldpoints.classList.remove("activedot")
            }
        });
        blocks.forEach(block=>{
            if(block.classList.contains("activeblock")){
                block.classList.remove("activeblock")
            }
        });
        point.classList.add("activedot");
        blocks[position].classList.add("activeblock");
        let slider = document.querySelector('.slideshow-container');
        slider.style.left = '-'+33*position+'em';
        el.forEach(slide=>{
            if(slide.classList.contains("slideactive")){
                slide.classList.remove("slideactive")
            }
            if(slide.classList.contains("commingslide")){
                slide.classList.remove("commingslide")
            }
        })
        let newpos = position -1;
        for(let i= newpos; i > 0;i--){
            el[i].classList.add("commingslide");
        }
        el[position].classList.add("slideactive");
        el[position+1].classList.add("commingslide");
    });
})