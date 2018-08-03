/**
 * Created by Jepson on 2017/10/7.
 */
(function() {
  $.fn.accordion = function( colors, minWidth ) {
    colors = colors || [];
    minWidth = minWidth || 10;
    
    
    var $lis = this.find('li');
    
    // 每个盒子的平均宽度
    var avgWidth = this.width() / $lis.length;
    var maxWidth = this.width() - minWidth * ( $lis.length - 1 );
    
    $lis.each(function(index, element) {
      $(this).css('backgroundColor', colors[index] );
    });
    
    // 实现功能
    // 让当前li变大到 maxWidth, 其他li变小到 minWidth
    $lis.mouseenter(function() {
      $(this).stop(true).animate({width: maxWidth})
        .siblings().stop().animate({width:minWidth});
    })
    
    // 移出去, 所有 的li 恢复 avgWidth
    this.mouseleave(function() {
      $lis.stop(true).animate({width: avgWidth});
    })
  }
})();
