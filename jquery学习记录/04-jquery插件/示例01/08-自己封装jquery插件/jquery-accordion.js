/**
 * Created by luodianlei on 2018/4/27.
 */
//由于我们封装的是jquery插件,我们对应的方法需要使用jquery对象调用
// 所以应该把方法添加到jquery的原型上
// $.fn === $.prototype
$.fn.accordion = function(obj){
  //如果用户不想传递过多的参数
  // 要求用户必须传递一个colors属性
  obj.minWidth = obj.minWidth || 100;
  // console.log(obj);
  // console.log(this);
  var lis = this.find('li');
  
  //动态的设置颜色
  lis.each(function(index, element){
    $(element).css('backgroundColor', obj.colors[index]);
  })
  // console.log(lis);
  //lis也是jquery对象
  //计算每一个li最大的宽度
  // var liMaxW =  大盒子的宽度 - 最小宽度*lis.length - 1;
  var liMaxW = this.width() - obj.minWidth* (lis.length - 1);
  var agvWidth = this.width() / lis.length;
  lis.mouseenter(function(){
    //让自己变大,让其他的变小
    // console.log(this);  this是dom对象
    $(this).stop(true).animate({width: liMaxW}).siblings().stop(true).animate({width: obj.minWidth});
  })
  
  this.mouseleave(function(){
    //让所有的li恢复正常
    lis.stop(true).animate({width: agvWidth});
  })
  
}