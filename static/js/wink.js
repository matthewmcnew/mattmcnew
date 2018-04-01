$(function(){
  $(".avatar img").on({
   mouseenter: function(){
    $(this).attr("src","/images/wink.gif");
  },
  mouseleave: function(){
    $(this).attr('src','/images/mcnew.gif');
  }
  });
});