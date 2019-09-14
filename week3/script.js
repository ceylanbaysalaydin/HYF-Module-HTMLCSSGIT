
$(window).resize(function(){location.reload();});

$(function () {
    $(document).on("click","nav span.bars i.fa-bars",function (e) { 
        e.preventDefault();
        $("#mySidenav").css("width", "35vw");
        $("#main").css("marginLeft","-35vw");
        $(this).removeClass("fa-bars").addClass("fa-times");
    });
});

$(function () {
    $(document).on("click","i.fa-times", function(e){
        e.preventDefault();
        $("#mySidenav").css("width", "0");
        $("#main").css("marginLeft","0");
        $(this).removeClass("fa-times").addClass("fa-bars");
        console.log("cl");
      });
});
