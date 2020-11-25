if ($(window).width() > 1200) {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $('.navbar-home').addClass("fixed-top");
            $('.navbar-btn').addClass('mr-2');
            //serve per cambiare l'immagine $('.navbar-img').attr('src', "../../assets/img/erretechnologygroup.png")


            // add padding top to show content behind navbar
            $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
        } else {
            $('.navbar-home').removeClass("fixed-top");
            $('.navbar-btn').removeClass('mr-2');
            // serve per cambiare l'immagine $('.navbar-img').attr('src', "../../assets/img/erretechnologygroup.png")
            // remove padding top from body
            $('body').css('padding-top', '0');
        }
    });
}