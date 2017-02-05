
//Find right edge of main card and position nav relative to it
function nav_pos() {
    var pos = $("#main-card").offset();
    var right = pos.left + $("#main-card").outerWidth();

    $("#nav-circles").offset({
        left: right - 60
    });
}

$(document).ready(function() {
  //Expand and shrink project cards on click
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
    //Stop button click from triggering project card shrink
    $(".btn").click(function(e) {
     e.stopPropagation();
});
    //Set nav on page load
    nav_pos();

    //reset nav if window size changes
    $(window).resize(function() {
        nav_pos();
    });



});
