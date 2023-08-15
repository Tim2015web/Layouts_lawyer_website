// jQuery
jQuery(document).ready(function () {
    // Функционал бургера
    $('#showModal, #closeModal').click(function () {
        $('#modal').toggleClass('header-modal-menu_show');
        $('body').toggleClass('body_lock');
    });

    // Slick Slider
    $('.slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        autoplay: true,
        appendArrows: $('.arrows'), // Внешний блок со стрелками
        appendDots: $('.dots') // Внешний блок с точками
    })
});