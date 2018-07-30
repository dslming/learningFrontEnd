/**
 * Created by Jepson on 2017/10/7.
 */
// $.fn.accordion
$.fn.accordion = function( colors, minWidth ) {
  var $lis = this.find('li');
  var boxWidth = $lis.width();
  var maxWidth = this.width() - ($lis.length - 1) * minWidth;
  
  $lis.each(function (index, element) {
    $(element).css('backgroundColor', colors[index]);
  });
  
  // 鼠标进入 li
  $lis.mouseenter(function () {
    $(this).stop().animate({width: maxWidth})
      .siblings().stop().animate({width: minWidth});
  });
  
  // 鼠标离开恢复
  this.mouseleave(function() {
    $lis.stop().animate({width: boxWidth})
  });
  
};
