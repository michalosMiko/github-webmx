
(function($){
    $(function(){
        // ==sem píšem jQuery
// ======www.code.jQuery.com  cdn====minified======kod do hlavičky html====video 109==
        //========== první scrol menu=======video110 111=================
        
         $(".jq--scroll-menu-jedna").click(function(){

             $("html, body").animate({scrollTop: $(".jq--menu-jedna").offset().top}, 1200);
         });


// =================scroll dva menu===================================
$(".jq--scroll-menu-dva").click(function(){

    $("html, body").animate({scrollTop: $(".jq--menu-dva").offset().top}, 1200);
});


        // ===========scrol třetí menu patička============================
         $(".jq--scroll-menu-tri").click(function(){

             $("html, body").animate({scrollTop: $(".jq--menu-tri").offset().top}, 1500);
             });


// ===========scrol čtvrté menu Domu============================
         $(".jq--scroll-menu-ctyry").click(function(){

         $("html, body").animate({scrollTop: $(".jq--menu-ctyry").offset().top}, 1500);
     });


// =====================Mobile navigation=========slide je zajíždí===fade přepíná=116==
      $(".jq--nav-icon").click(function(){

        $(".nav-background").slideToggle(800);
        $(".mobile-nav-back").fadeToggle(1500);
        $("nav ul").fadeToggle(1400);
        
      });


// =======změna hamburgeru za kříž a naopak======podmínka 117
      $(".jq--image-hamburger").click(function(){

        if($(".jq--image-hamburger").attr("src") == "img/hamburgerMenu.png")
        {
            $( $(".jq--image-hamburger").attr("src","img/crossMenu.png"));
        }
        else
        {
            $( $(".jq--image-hamburger").attr("src","img/hamburgerMenu.png"));  
        }
      });
 


    });
})(jQuery);
// ======================Atomatic slider galery===============
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter ++;
    if(counter > 4){
        counter = 1;
    }
}, 3500);