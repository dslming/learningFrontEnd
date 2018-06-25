
// 就像jq一样 $("#id").click(function())
//  itcastEvent(dom).tap(function(){});
/*
 itcastEvent(dom).swipe(function(direction){
  switch(direction){
		case "left":
		…………
		bread;
		case "right":
		……
		break;
	}
 })
*/
function itcastEvent(dom) {
	return {
		tap: function (callback) {
			/*
				需求：
				1 判断手指的个数 >1   
				2 判断手指移动的距离  > 5px 
				3 判断手指按下的时间 不能太长
			*/
			// 获取手指按下的坐标
			var startx, starty;
			dom.addEventListener("touchstart", function (e) {
				// console.log('start');
				// 判断手指个数
				if (e.targetTouches.length > 1) {
					console.log('不是点击事件');
					return;
				}
				// 获取开始坐标
				startx = e.targetTouches[0].clientX;
				starty = e.targetTouches[0].clientY;
			});

			dom.addEventListener("touchend", function (e) {
				// console.log('end');
				// 判断手指个数
				if (e.changedTouches.length > 1) {
					return;
				}
				// 获取手指离开的坐标
				var endx = e.changedTouches[0].clientX;
				var endy = e.changedTouches[0].clientY;

				// 判断手指移动距离
				if (Math.abs(endx - startx) > 5) {
					return;
				}

				if (Math.abs(endy - starty) > 5) {
					return;
				}

				// 执行点击事件的逻辑
				// console.log('开始点击拉');
				callback(e);

			});
			// 实现链式编程的关键--返回自己
			return this;
		},
		swipe: function (callback) {
			/*
			 需求：
			 1 手指个数不能大于 1
			 2 手指滑动的距离不能太短 >10 
			 3 判断手指按下的时间 不能太长
			*/

			// 开始的坐标
			var startx, starty;
			dom.addEventListener("touchstart", function (e) {
				// 判断手指个数
				if (e.targetTouches.length > 1) {
					return;
				}

				// 记录手指开始的位置
				startx = e.targetTouches[0].clientX;
				starty = e.targetTouches[0].clientY;
			});

			dom.addEventListener("touchend", function (e) {
				// 判断手指个数
				if (e.changedTouches.length > 1) {
					return;
				}

				var endx = e.changedTouches[0].clientX;
				var endy = e.changedTouches[0].clientY;

				// 方向
				var direction;
				// 1 判断滑动的距离 不能小于10 2 判断滑动的方向
				if (Math.abs(endx - startx) > 10) {
					// 判断方向
					if (endx - startx > 0) {
						// 右滑
						direction = "right";
					} else if (endx - startx < 0) {
						direction = "left";
					}
				}
				else if (Math.abs(endy - starty) > 10) {
					// 判断方向
					if (endy - starty > 0) {
						// 下滑
						direction = "down";
					}
					else if (endy - starty < 0) {
						direction = "up";
					}
				} else {
					return;
				}

				// 执行逻辑
				callback(direction);

			});
			// 实现链式编程的关键--返回自己
			return this;
		}
	};
}