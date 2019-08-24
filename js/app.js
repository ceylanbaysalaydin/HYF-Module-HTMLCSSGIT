

$(function () {
    $("#navbarNavDropdown ul li a.nav-link").click(function (e) { 
       // e.preventDefault();
        $("#navbarNavDropdown ul li.active").removeClass("active");
        $(this).parent().addClass("active");
        return true;
    });
});


function mySlideEffect(id,h3){
    $(function () {
        $(id+" "+ h3).click(function(e){
            e.preventDefault();
            $( id+" ul").slideToggle("slow");
        })
    });
}

mySlideEffect("#education","h3");
mySlideEffect("#hard-skills","h3");
mySlideEffect("#soft-skills","h3");
mySlideEffect("#certificates","h3");

