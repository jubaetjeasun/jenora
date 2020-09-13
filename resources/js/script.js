$(document).ready(function(){

    // sticky navigation
    $('.js-hairstyle-section').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('nav-box-shadow');
        }else{
            $('nav').removeClass('nav-box-shadow');
        }
    },{
        offset:'60px;'
    });
    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault()
      
        $('html, body').animate(
          {
            scrollTop: $($(this).attr('href')).offset().top,
          },
          900,
          'linear'
        )
      })
    // animation on scroll
    // hiding elements
    $('.js-wp--whyus')
    .css('opacity', 0) // immediately hide element
    .waypoint(function(direction) {
        if (direction === 'down') {
        $(this.element).animate({ opacity: 1 })
        }
    }, {
        offset: '80%'
    })

    //giving animation
    $('.js-wp--whyus').waypoint(function(direction){
        $('.js-wp--whyus').addClass('animate__animated animate__fadeInLeftBig');
        
    },{
        offset: '80%'
    });

    // animation on scroll
    // hiding elements
    $('.js-wp--whyussecond')
    .css('opacity', 0) // immediately hide element
    .waypoint(function(direction) {
        if (direction === 'down') {
        $(this.element).animate({ opacity: 1 })
        }
    }, {
        offset: '70%'
    })

    //giving animation
    $('.js-wp--whyussecond').waypoint(function(direction){
        $('.js-wp--whyussecond').addClass('animate__animated animate__fadeInRightBig');
        
    },{
        offset: '70%'
    });

    // animation on scroll
    // hiding elements
    $('.js-wp--map')
    .css('opacity', 0) // immediately hide element
    .waypoint(function(direction) {
        if (direction === 'down') {
        $(this.element).animate({ opacity: 1 })
        }
    }, {
        offset: '70%'
    })

    //giving animation
    $('.js-wp--map').waypoint(function(direction){
        $('.js-wp--map').addClass('animate__animated animate__fadeInUpBig');
        
    },{
        offset: '70%'
    });

    //giving animation
    $('.js-wp--customerfeedback').waypoint(function(direction){
        $('.js-wp--customerfeedback').addClass('animate__animated animate__flash');
        
    },{
        offset: '30%'
    });

    // animation on scroll
    // hiding elements
    $('.js-wp--zoom-in')
    .css('opacity', 0) // immediately hide element
    .waypoint(function(direction) {
        if (direction === 'down') {
        $(this.element).animate({ opacity: 1 })
        }
    }, {
        offset: '70%'
    })

    //giving animation
    $('.js-wp--zoom-in').waypoint(function(direction){
        $('.js-wp--zoom-in').addClass('animate__animated animate__zoomIn');
        
    },{
        offset: '70%'
    });
    // mobile navigation
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        nav.slideToggle(200);
    })



});
// For Popup box
document.querySelector("#popupbutton1").addEventListener('click', function () {
    document.querySelector(".bg-model").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".bg-model").style.display = "none";
});