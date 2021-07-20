$(document).ready(function(){

    $('.autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows :true,
        dots:true,
        prevArrow: '<img src="assets/icons/leftArrow.svg" class="prev" alt="">',
        nextArrow: '<img src="assets/icons/rightArrow.svg" class="next" alt="">'
      });
  
      $('.autoplay1').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:false,
        autoplaySpeed: 2000,
        centerPadding:'5px',
        centerMode:true,
        arrows :true,
        prevArrow: '<img src="assets/icons/leftScroll.svg" class="prev" alt="">',
        nextArrow: '<img src="assets/icons/rightScroll.svg" class="next" alt="">'
      });
      
  });

  function scrollWin() {
    window.scroll({
      top:800,
      behavior: 'smooth' 
    });
}


window.onscroll = function() {
  AOS.init({
    once: true
  })
};


filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className+="active";
  });
}