$(".Milk").click(function() {
    $(".mans-reply").text("Your on the run!!!!");
    $(".choices").text("What should you do next?");
    $(".Milk").css("color", "Red");
    $(".run").show();
    $(".1st_set").hide();
    $(".2nd_set").show();
});


$(".Home").click(function() {
    $(".mans-reply").text("Your a dad!!!!");
    $(".2nd_set").show();
    $(".choices").text("What should you do next?");
    $(".Home").css("color", "Blue");
    $(".father").show();
    $(".1st_set").hide();
});
$(".run").hide();
$(".father").hide();
$(".2nd_set").hide();
$(".spain-picture").hide();
$(".spain").click(function() {
    $(".run").hide(); 
    $(".father").hide();
    $(".2nd_set").show();
    $(".mans-reply").text("You live a new life in spain");
    $(".spain-picture").show();
     $(".2nd_set").hide();
     $(".3rd_set").show();
});
$(".job").click(function() {
    $(".mans-reply").text("your an office man");
    $(".Office").show();
    $(".father").hide(); 
    $(".spain-picture").hide();
     $(".run").hide(); 
    $(".2nd_set").hide();
    $(".3rd_set").show();
}); 
$(".Office").hide(); 
$(".3rd_set").hide();
$(".police_notified").click(function() { 
  $(".mans-reply").text("the cops are looking for you");  
   $(".police").show();
});
$(".police").hide();