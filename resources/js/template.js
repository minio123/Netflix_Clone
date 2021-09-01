//for nav menu background when scolling up and down
var counter = 0;

window.onscroll = function (e) {  

    var navigation_class = document.getElementById('nav_menu');

    if( window.pageYOffset > 50  && counter == 0){
        navigation_class.classList.add('scrolled');
         counter = 1;
    }
    if(window.pageYOffset == 0){
        navigation_class.classList.remove('scrolled');
        counter = 0;
    }
}

