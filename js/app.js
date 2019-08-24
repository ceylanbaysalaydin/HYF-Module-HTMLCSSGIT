
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

function bubbleAnimation(){
    $(function () {
        $("div.animation p").html("Bootstrap").css("color","white");
        $("div.animation").animate({
            top:"500px",
            width:"155px",
            height:"155px",
            opacity:".6",
        },2000,function (){
            $("div.animation p").html("Css");
        });
       
        $("div.animation").animate({
            top:"400px",
            width:"100px",
            height:"100px",
            right:"80px",
            opacity:"1"
        },2000,function (){
            $("div.animation p").html("JS");
        });
        $("div.animation").animate({
            top:"300px",
            width:"80px",
            height:"80px",
            right:"40px",
            opacity:".6"
        },2000,function (){
            $("div.animation p").html("Html");
        });
        $("div.animation").animate({
            top:"200px",
            width:"120px",
            height:"120px",
            right:"10px",
            opacity:"1"
        },2000,function (){
            $("div.animation p").html("jQuery");
        });
        $("div.animation").animate({
            top:"100px",
            width:"100px",
            height:"100px",
            right:"80px",
            opacity:".6"
        },2000,function (){
            $("div.animation p").html("Git");
        });
        $("div.animation").animate({
            top:"0px",
            width:"30px",
            height:"30px",
            right:"0px",
            opacity:"0"
        },2000);
    
    });
}

mySlideEffect("#education","h3");
mySlideEffect("#hard-skills","h3");
mySlideEffect("#soft-skills","h3");
mySlideEffect("#certificates","h3");
bubbleAnimation();



