$(document).ready(function(){
  $("#drop1").click(function(){
    $("#myDropdown1").animate({
      height: 'toggle'
    });
  });

  $("#drop2").click(function(){
    $("#myDropdown2").animate({
      height: 'toggle'
    });
  });

  $("#drop3").click(function(){
    $("#myDropdown3").animate({
      height: 'toggle'
    });
  });

  $("#drop4").click(function(){
    $("#myDropdown4").animate({
      height: 'toggle'
    });
  });

  $("#drop5").click(function(){
    $("#myDropdown5").animate({
      height: 'toggle'
    });
  });

  $("#drop6").click(function(){
    $("#myDropdown6").animate({
      height: 'toggle'
    });
  });

  $("#drop7").click(function(){
    $("#myDropdown7").animate({
      height: 'toggle'
    });
  });

  $("#drop8").click(function(){
    $("#myDropdown8").animate({
      height: 'toggle'
    });
  });
});

$(function(){
  $('input[type="number"]').niceNumber({
    // auto resize the number input
    autoSize: true,
    // the number of extra character
    autoSizeBuffer: 1,
    // custom button text
    buttonDecrement: '-',
    buttonIncrement: "+",
    // 'around', 'left', or 'right'
    buttonPosition: 'around'
  });
});

$(document).ready(function() {
  $('#getting-started').countdown('2022/03/17', function(event) {
    $(this).html(event.strftime('%D days %H:%M:%S'));
    $(this).html(event.strftime('<div class="single-countdown"><h2>%D</h2> <span>Days</span></div>  <div class="single-countdown"><h2>%H</h2><span>Hours</span></div> <div class="single-countdown"><h2>%M</h2><span>Minutes</span></div> <div class="single-countdown"><h2>%S</h2><span>Seconds</span></div>'));
});
});

const buttons = document.querySelectorAll("[data-btn]");
buttons.forEach(element => {
  element.addEventListener("click", ()=> {
    const nextOrPrev = (element.dataset.cBsBtn==="next")? 1: -1;
    const slides = element.closest("[data-carousel]").querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newSlideIndex = [...slides.children].indexOf(activeSlide) + nextOrPrev;
    if(newSlideIndex < 0) newSlideIndex = slides.children.length - 1;
    if(newSlideIndex >= slides.children.length) newSlideIndex = 0;
    delete activeSlide.dataset.active;
    slides.children[newSlideIndex].dataset.active = true;
  });
});

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").classList.add("sticky");
    document.getElementById("navbar").classList.remove("p-4");
    document.getElementById("to-top").style.display = "inline";
  } else {
    document.getElementById("navbar").classList.remove("sticky");
    document.getElementById("navbar").classList.add("p-4");
    document.getElementById("to-top").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}