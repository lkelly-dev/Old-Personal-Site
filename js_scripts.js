function nav_pos() {
    var pos = $("#main-card").offset();
    var right = pos.left + $("#main-card").outerWidth();

    $("#nav-circles").offset({
        left: right - 60
    });
}

$(document).ready(function() {
    $(".project-card").click(function(e) {
        if ($(this).attr("class") == "project-card") {
            $('html,body').animate({
                scrollTop: $("#above_projects").offset().top
            }, 'slow');
            $('.project-card').hide();
            $(this).removeClass('project-card');
            $(this).addClass('expanded-card');
            $(this).show();
        } else {
            $(this).addClass('project-card');
            $(this).removeClass('expanded-card');
            $('html,body').animate({
                scrollTop: $(".projects").offset().top
            }, 'slow');
            $('.project-card').show();
        }
    });

    nav_pos();


    $(window).resize(function() {
        nav_pos();
    });



});
