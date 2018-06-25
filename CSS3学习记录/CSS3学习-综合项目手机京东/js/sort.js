/*
  需求：
	1 手指滑动的时候，菜单跟着滑动
	2 加上弹簧距离
	3 点击置顶的效果
	  1） 点击的时候往上移动的距离 就是当前点击li标签的前面所有li标签的高度和
		2） 如何获取当前点击的li-
*/
swpie();
function swpie() {

	// 获取对象
	var menu_ul = document.querySelector('.menu_ul');

	// 手指触摸开始的坐标
	var startY;

	// 在move事件里面滑动了的距离
	var moveDis = 0;

	// 记录已经移动了的距离
	var distance = 0;

	// 弹簧
	var spring = 50;

	// 下拉最大 距离
	// console.log(menu_ul.offsetHeight);
	// console.log(document.body.offsetHeight);

	var maxDis = -(menu_ul.offsetHeight - (document.body.offsetHeight - 45));
	// console.log(maxDis);

	menu_ul.addEventListener("touchstart", function (e) {
		// console.log('start');
		// 记录手指触摸开始的坐标  115
		startY = e.targetTouches[0].clientY;
		// 清除过渡效果
		this.style.transition = "none";
		// console.log(startY);

	});

	menu_ul.addEventListener("touchmove", function (e) {
		// console.log('move');
		var tmpY = e.targetTouches[0].clientY;

		// 算出 此时滑动了的距离
		var dis = tmpY - startY + distance;
		if (dis > spring) {
			dis = spring;
		} else if (dis < maxDis - spring) {
			// 往上滑动的时候 距离都是负数
			dis = maxDis - spring;
		}
		moveDis = dis;
		// 进行位移
		this.style.transform = "translateY(" + dis + "px)";
		// console.log(dis);
	});

	menu_ul.addEventListener("touchend", function () {
		if (moveDis > 0) {
			moveDis = 0;
		} else if (moveDis < maxDis) {
			moveDis = maxDis;
		}
		distance = moveDis;

		// 进行吸附
		this.style.transition = "all .4s";
		this.style.transform = "translateY(" + moveDis + "px)";
	});

	itcastEvent(menu_ul).tap(function (e) {
		// 获取获取当前点击的li标签对象
		var li = e.target.parentNode;

		var lis = document.querySelectorAll(".menu_ul>li");

		// li标签的索引
		var index = 0;
		for (var i = 0; i < lis.length; i++) {
			var element = lis[i];
			element.classList.remove("active");
			if (element === li) {
				index = i;
				li.classList.add("active");
			}
		}

		// 点击需要移动的距离
		var totalDis = -index * li.offsetHeight;
		if (totalDis > 0) {
			totalDis = 0;
		} else if (totalDis < maxDis) {
			totalDis = maxDis;
		}
		distance = totalDis;
		menu_ul.style.transform = "translateY(" + totalDis + "px)";
	});
}