let el = document.querySelectorAll('#PrizmWrapper .ps-timeline-sec .container ol.ps-timeline li span');
let ele = document.querySelectorAll('#PrizmWrapper .ps-timeline-sec .container ol.ps-timeline li');
function hasClass(element, className) {
    return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
}
ele.forEach(function(item, index){
item.addEventListener('click', function(){
    for(let i =0; i< ele.length; i++){
        if(hasClass(ele[i].querySelector('span'), 'active')){
            ele[i].querySelector('span').classList.remove('active');
        }
    }
    item.querySelector('span').classList.add('active');
    
    if(item.getAttribute('data-position')){
      currentSlide(item.getAttribute('data-position'));
    }

})
})
let slideIndex = 5;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  let index = parseInt(n)
  showSlides(slideIndex = index);
document.getElementsByClassName("mySlides")[n-1].scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      slides[i].style.position = 'absolute';
      slides[slideIndex-1].style.right = '-100%';

    }
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1].style.position = 'static';
  slides[slideIndex-1].style.right = 'inherit';
}