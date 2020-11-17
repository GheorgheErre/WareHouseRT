//hr che si espande 
jQuery(document).ready(function ($) {
    setTimeout(function () {
        $('.trans--grow').addClass('grow');
    }, 275);
});



//Anchor con transizione
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

$(document).ready(function () {


    $("#bottone-start").on("click", function () {

        $("#backgroundImg").css({
            "filter": "blur(8px)",
            'transition': 'all 1s ease-out',
            '-webkit-transition': 'all 1s ease-out',
            '-moz-transition': 'all 1s ease-out',
            '-o-transition': 'all 1s ease-out'
        });
    
        
        $("#rowLogoStart").css({
            "opacity": "0",
            'visibility' :'hidden',
            'transition': 'all 1s ease-out',
            '-webkit-transition': 'all 1s ease-out',
            '-moz-transition': 'all 1s ease-out',
            '-o-transition': 'all 1s ease-out',
            
        });
      

        $("#containerLogin").css({
            'visibility':'visible',
            "opacity": "100%",
            'transition': 'all 1s ease-out',
            '-webkit-transition': 'all 1s ease-out',
            '-moz-transition': 'all 1s ease-out',
            '-o-transition': 'all 1s ease-out'
        });
        $("header").css({
            
         
        });
    });
});