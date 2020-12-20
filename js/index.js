$(document).ready(function(){
 
for(var i = 0; i < 680; i++) {
  $(".background").append(
    "<div class = 'lego' color_state='basic'number='" + i + "''></div>"
    );
}
$(".lego").on("click",function(){
  console.log($(this).attr("color_state"));
  if ($(this).attr("color_state") === "basic"){
    $(this).css("background-image", "url(img/lego_blue.png)")
    $(this).attr("color_state","blue")
  } else if 
    ($(this).attr("color_state") === "blue") {
    $(this).css("background-image","url(img/lego_red.png)")
    $(this).attr("color_state", "red")
  } else {
    $(this).css("background-image","url(img/legob.png)")
    $(this).attr("color_state","basic")
  }
 });

});

