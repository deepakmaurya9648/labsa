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
        slidesToShow:3,
        autoplay:false,
        autoplaySpeed: 2000,
        centerPadding:'0px',
        centerMode:true,
        arrows :true,
        prevArrow: '<img src="assets/icons/leftScroll.svg" class="prev" alt="">',
        nextArrow: '<img src="assets/icons/rightScroll.svg" class="next" alt="">'
      });
      $('.autoplay2').slick({
        slidesToShow:4,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 2000,
      });

      // $("#open").click(function(){
      //   $(".modal-container").addClass("active");
      // });
      // $("#close").click(function(){
      //   $(".modal-container").css("transform","scale(0)");
      // });
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
var header = document.getElementsByClassName("myBtnContainer");
var btns = header[0].getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


// --------------javascript for favorite button---------------
function favBtn(x){
  x.classList.toggle("fas");
}


//--------------------javascript for modal--------------//


function openModal(evt,modalName) {
  var i,btn, tablinks;
  modal = document.getElementsByClassName("modal-container");
  for (i = 0; i < modal.length; i++) {
    modal[i].style.transform= "scale(0)";
  }
  document.getElementById(modalName).style.transform = "scale(1)";
}

function openClose(modalName) {
  document.getElementById(modalName).style.transform = "scale(0)";
  
}
// -------------------drop down ------------
function showDropDown(evt,name) {
  var i,btn, tablinks;
  megaBox = document.getElementsByClassName("mega-box");
  for (i = 0; i < megaBox.length; i++) {
    megaBox[i].style.visibility= "hidden";
  }
  document.getElementById(name).style.visibility = "visible";
}

document.addEventListener('mouseup', function(e) {
  let container = document.getElementsByClassName('mega-box');
  for (i = 0; i < container.length; i++) {
    if (!container[i].contains(e.target)) {
      container[i].style.visibility = 'hidden';
    }
  }
  
});