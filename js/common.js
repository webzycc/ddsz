//插入固定在右边的悬浮按钮
$(function() {
	$(".body-container").append('');
	var wWidth = $(window).width();
	var wHeight = $(window).height();
	var imgLeft = 0;
	var scrollTop = 0;
	if($(this).scrollTop() > 200) {
		$(".fixed_box .to_top").show()
	} else {
		$(".fixed_box .to_top").hide()
	}
	$(window).scroll(function() {
		scrollTop = $(this).scrollTop()
		if($(this).scrollTop() > 200) {
			$(".fixed_box .to_top").fadeIn()
		} else {
			$(".fixed_box .to_top").fadeOut()
		}
	})

	$(".fixed_box").css("bottom", "120px")
	if(wWidth < 980) {
		imgLeft = (wWidth - 980) - 140;
	} else {
		imgLeft = (wWidth - 980) / 2 - 140
	}
	$(".fixed_box").css("right", imgLeft);
	$(window).resize(function() {
		wWidth = $(window).width();
		wHeight = $(window).height();
		if(wWidth < 980) {
			imgLeft = (wWidth - 980) - 140;
		} else {
			imgLeft = (wWidth - 980) / 2 - 140;
		}
		$(".fixed_box").css("bottom", "120px")
		$(".fixed_box").css("right", imgLeft);
	})
		//二维码显示
	$(".look_telephone").hover(function() {
		$(".telephone_pop").stop(true,true).fadeIn();
	}, function() {
		$(".telephone_pop").stop(true,true).fadeOut();
	})
	//	回到顶部
	$(".to_top").click(function() {
			$('body,html').animate({
				scrollTop: 0
			}, 200);
		})
})

//处理图片的宽高
function setImgWH(obj) {
	if(obj.width > obj.height) {
		$(obj).css('height', '100%');
	} else {
		$(obj).css('width', '100%');
	}
}

$(function() {
	//弹窗
	var H_ture = $(".switchbox .content").height();
	var flag = true;
	if(H_ture > 36) {
		$(".switchbox .content").css("height", "36px")
		$(".slideBtn a").click(function() {
			if(flag) {
				$(".switchbox .content").animate({
					"height": H_ture
				})
				$(this).addClass("active")
			} else {
				$(".switchbox .content").animate({
					"height": "36px"
				})
				$(this).removeClass("active")
			}
			flag = !flag;
		})
	}
	//			点击标签的效果
	$(".switchbox .content a").click(function() {
		$(".switchbox .content a").removeClass("active")
		$(this).addClass("active")
	})
});

$(function(){
    var lstu = location.href;
    $(".nav a").each(function() {
        if ($(this).attr("href")==lstu) $(this).addClass("active")
    });
});
$(function(){
    var lstu = location.href;
    $(".keysbox a").each(function() {
        if ($(this).attr("href")==lstu) $(this).addClass("active")
    });
});