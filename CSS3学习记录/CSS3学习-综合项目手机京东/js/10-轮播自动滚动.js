changeHeader();
kill_time();
carousel();
/**
 * 
 * 需求
 * 1 页面初始化的时候，header背景透明-rgba
 * 2 随着页面往下滑动的时候，header透明度在变大（0-0.9）
 * 3 当页面下滑的高度超出了轮播图的高度之后。header透明度就固定（0.9）
 */
function changeHeader() {

	// 获取header标签
	var header = document.querySelector("header");

	// 设置header background-     rgba 
	header.style.backgroundColor = "rgba(201,21,35,0)";

	// 2 随着页面往下滑动的时候，header透明度在变大（0-0.9）

	// 最大透明度
	var maxOpa = 0.9;

	// 获取轮播图的高度
	var height = document.querySelector(".carousel").clientHeight;
	// console.log(height);

	window.onscroll = function () {

		var scrollTop = document.body.scrollTop;
		// console.log(scrollTop);

		var tmpOpa = scrollTop / height;

		if (tmpOpa > maxOpa) {
			tmpOpa = maxOpa;
		}

		// 设置header标签的rgba
		header.style.backgroundColor = "rgba(201,21,35," + tmpOpa + ")";
	}
}


/**
 * 倒计时
 */
function kill_time() {

	// 总时间
	var time = 5 * 60 * 60;

	setInterval(function () {
		time--;

		// 获取小时 Math.floor()
		var hour = parseInt(time / 60 / 60);
		// console.log(hour);

		// 获取分
		var minute = parseInt(time / 60 - hour * 60);
		// console.log(minute);

		// 获取秒
		var second = time - hour * 60 * 60 - minute * 60;
		// console.log(second);


		// 设置值

		// 获取所有的时间标签 span
		var spans = document.querySelectorAll(".timer>span");
		// console.log(spans.length);

		// hour=4 04   4 => 04  4/10=0.4  14/10=1.4  4%10=4 14%10=4 
		spans[0].innerHTML = parseInt(hour / 10);
		spans[1].innerHTML = hour % 10;

		spans[3].innerHTML = parseInt(minute / 10);
		spans[4].innerHTML = minute % 10;

		spans[6].innerHTML = parseInt(second / 10);
		spans[7].innerHTML = second % 10;
	}, 1000);
}


/*
  需求：
	1 先做自动滚动
	2 做手动滑动效果
	3 索引器随着轮播变化而变化
*/

function carousel() {

	// 获取要轮播的对象
	var carousel_ul = document.querySelector('.carousel_ul');

	// 定义轮播的索引
	var index = 1;

	// 以前通过margin-left 但是在移动端 使用transform:translateX()
	// console.log("-" + index + "0%");

	carousel_ul.style.transform = "translateX(-" + index + "0%)";

	// 开启定时器
	var timeId = setInterval(function () {
		index++;
		carousel_ul.style.transition = "all .5s";
		carousel_ul.style.transform = "translateX(-" + index + "0%)";

	}, 1000);

	// 过渡结束事件
	carousel_ul.addEventListener("transitionend", function () {
		// console.log(index);
		// 判断是否到了倒数第二张(8)，把索引改为第一张(0)
		// 浏览器缩小后 判断无效 其实是 浏览器的bug 所以要 >= 
		if (index >= 8) {
			index = 0;
		}

		// 将轮播瞬间切换位置 -不需要使用过渡效果
		carousel_ul.style.transition = "none";
		carousel_ul.style.transform = "translateX(-" + index + "0%)";
	});
}