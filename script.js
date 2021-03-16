
// bar onclick function

$( "#open" ).click(function() {
    $("nav ul").addClass("active");
    $("nav .bar-icon").addClass("active");
});


$( "#close" ).click(function() {
    $("nav ul").removeClass("active");
    $("nav .bar-icon").removeClass("active");
});



$( "nav ul li a" ).click(function() {
    $("nav ul").removeClass("active");
    if ($("nav .bar-icon").hasClass("active") == true){
        $("nav .bar-icon").removeClass("active");
    }
});


// for text animation in section 4

// როცა ეკრანის ქვედა საზღვარი მიაღწევს მეოთხე სექციის ზედა საზღვარს, დაიწყება ანიმაცია

$(window).scroll(function(){
    var position = $('#info').offset().top;
    var scroll = $(window).scrollTop() + $(window).height();
    if(position <= scroll){
        $("#info h3").addClass("animation2");
    }
})
$(window).scroll(function(){
    var position = $('#info').offset().top;
    var scroll = $(window).scrollTop() + $(window).height();
    if(position <= scroll){
        $("#info p").addClass("animation3");
    }
})


