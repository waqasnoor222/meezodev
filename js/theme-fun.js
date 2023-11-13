$(function(){
    
    $('.hero-slider').slick({
        dots: false,
        arrows:true,
        autoplay: true,
        autoplaySpeed: 6000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        pauseOnHover: false,
        vertical: false,
        verticalSwiping: false,
        verticalReverse: false,
        fade:true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    draggable: false,
                    swipe: false,
                }
            }
        ]
    });

    $('.client-slider').slick({
        dots: false,
        arrows:true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        speed: 500,
        pauseOnHover: false,
        vertical: false,
        verticalSwiping: false,
        verticalReverse: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    draggable: false,
                    swipe: false,
                }
            }
        ]
    });

    $('.test-slider').slick({
        dots: true,
        arrows:true,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        pauseOnHover: false,
        vertical: false,
        verticalSwiping: false,
        verticalReverse: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    draggable: false,
                    swipe: false,
                }
            }
        ]
    });

    
});

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("activetab");
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).classList.add("activetab");
    evt.currentTarget.className += " active";
  }



  // function readHomePage() {}

document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".acc-item");
  
    accordionItems.forEach((item) => {
      const title = item.querySelector(".acc-item h3");
      const content = item.querySelector(".acc-item p");
      const chevron = item.querySelector(".acc-chevron");
  
      title.addEventListener("click", () => {
        const isExpanded = content.style.display === "block";
  
        content.style.display =
          content.style.display === "none" ? "block" : "none";
        content.style.display = isExpanded ? "none" : "block";
  
        chevron.style.transform = isExpanded ? "rotate(180deg)" : "rotate(0deg)";
      });
    });
  });


  var tab; // заголовок вкладки
var tabContent; // блок содержащий контент вкладки


window.onload=function() {
    tabContent=document.getElementsByClassName('tabContent');
    tab=document.getElementsByClassName('tab');
    hideTabsContent(1);
}

document.getElementById('tabs').onclick= function (event) {
    var target=event.target;
    if (target.className=='tab') {
       for (var i=0; i<tab.length; i++) {
           if (target == tab[i]) {
               showTabsContent(i);
               break;
           }
       }
    }
}

function hideTabsContent(a) {
    for (var i=a; i<tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add("hide");
        tab[i].classList.remove('whiteborder');
    }
}

function showTabsContent(b){
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}

