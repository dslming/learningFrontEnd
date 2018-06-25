changeHeader();
kill_time();
carousel();

function changeHeader() {
	$("header").css("backgroundColor", "rgba(201,21,35,0)");
	var maxOpa = 0.9;
	window.onscroll = function () {
		var scrollTop = $("body").scrollTop();
		var tmpOpa = scrollTop / $(".carousel").height();
		if (tmpOpa > maxOpa) {
			tmpOpa = maxOpa;
		}
		$("header").css("backgroundColor", "rgba(201,21,35," + tmpOpa + ")");
	}
}
function kill_time() {
	var time = 5 * 60 * 60;
	setInterval(function () {
		time--;
		var hour = parseInt(time / 60 / 60);
		var minute = parseInt(time / 60 - hour * 60);
		var second = time - hour * 60 * 60 - minute * 60;
		$(".timer>span").eq(0).html(parseInt(hour / 10));
		$(".timer>span").eq(1).html(hour % 10);
		$(".timer>span").eq(3).html(parseInt(minute / 10));
		$(".timer>span").eq(4).html(minute % 10);
		$(".timer>span").eq(6).html(parseInt(second / 10));
		$(".timer>span").eq(7).html(second % 10);
	}, 1000);
}
function carousel() {
	var index = 1;
	$(".carousel_ul").css("transform", "translateX(-" + index + "0%)");
	var timeId = goInterval();
	var li_ind = 0;
	$(".carousel_ul").on("transitionend", function () {
		li_ind = index - 1;
		if (index >= 8) {
			index = 0;
			li_ind = 7;
		} else if (index <= 0) {
			index = 8;
			li_ind = 7;
		}
		$(".carousel_ul").css({
			"transition": "none",
			"transform": "translateX(-" + index + "0%)"
		});

		$(".carousel_index>li").eq(li_ind).addClass("active").siblings().removeClass("active");
	});

	$(".carousel_ul").swipeLeft(function () {
		clearInterval(timeId);
		index++;
		$(".carousel_ul").css({
			"transition": "all .5s",
			"transform": "translateX(-" + index + "0%)"
		});
		timeId = goInterval();
	});
	$(".carousel_ul").swipeRight(function () {
		clearInterval(timeId);
		index--;
		$(".carousel_ul").css({
			"transition": "all .5s",
			"transform": "translateX(-" + index + "0%)"
		});
		timeId = goInterval();
	});

	function goInterval() {
		return setInterval(function () {
			index++;
			$(".carousel_ul").css({
				"transition": "all .5s",
				"transform": "translateX(-" + index + "0%)"
			});
		}, 1000);
	}
}