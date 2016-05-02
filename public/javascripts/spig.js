/*
*作者木木
*
*http://www.dao-gu.com
*/
//右键菜单
jQuery(document).ready(function ($) {
    $("#spig").mousedown(function (e) {
        if(e.which==3){
		showMessage("秘密通道：<br /> <a href=\"http://localhost:3000\" title=\"首页\">首页</a> <br /> <a href=\"http://localhost:3000/news/newslist/1\" title=\"首页\">购房攻略</a>",10000);
}
});
$("#spig").bind("contextmenu", function(e) {
    return false;
});
});

//鼠标在消息上时
jQuery(document).ready(function ($) {
    $("#message").hover(function () {
       $("#message").fadeTo("100", 1);
     });
});


//鼠标在上方时
jQuery(document).ready(function ($) {
    //$(".mumu").jrumble({rangeX: 2,rangeY: 2,rangeRot: 1});
    $(".mumu").mouseover(function () {
       $(".mumu").fadeTo("300", 0.3);
       msgs = ["买房子找唯房会，你算是找对人了！", "今天我会全程帮你选房哦！", "搜搜，搜搜你的目标楼盘，说不定有特价房哦！", "能买到特价房才最划算！","我的电话是4008-606-181，直接打电话来找我吧，说不定我是个大美女哦，嘻嘻"];
       var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i]);
    });
    $(".mumu").mouseout(function () {
        $(".mumu").fadeTo("300", 1)
    });
});

//开始
jQuery(document).ready(function ($) {
    
        var now = (new Date()).getHours();
        if (now > 0 && now <= 6) {
            showMessage(' 这么晚还在看房，你是夜猫子呀？明天再来找我吧，买房的事儿包在我身上，别要太累哦！', 10000);
        } else if (now > 6 && now <= 11) {
            showMessage(['早上好，我是唯小宝，欢迎来到唯房会！'], 10000);
        } else if (now > 11 && now <= 14) {
            showMessage(' 中午了，吃饭了么？不要饿着了，买房的事儿，有我唯小宝帮你，你放心好了！', 10000);
        } else if (now > 14 && now <= 18) {
            showMessage(' hi，我是唯房会唯小宝，中午的时光真难熬！还好有你在！', 10000);
        } else {
            showMessage(' hi，我是唯房会唯小宝，但我可没哟7个老婆哦，嘻嘻！快来逗我玩吧！', 10000);
        }    

    $(".spig").animate({
        top: $(".spig").offset().top + 300,
        left: document.body.offsetWidth - 160
    },
	{
	    queue: false,
	    duration: 1000
	});
//    window.setTimeout(function () {
//        showMessage("下面播报明日天气<iframe name=\"xidie\" src=\"http://t.xidie.com/skin/2010-0601.html\"frameborder=\“0\” scrolling=\"no\" height=\"15px\"  width=\"130px\" allowtransparency=\"true\" ></iframe>", 10000);
//    },
//	4000);
});

//鼠标在某些元素上方时
jQuery(document).ready(function ($) {
    $('.keyword').click(function () {//标题被点击时
        showMessage('输入楼盘名称或楼盘名称中的几个字就可以查询咯');
    });
    $('.hx-p-img').mouseover(function () {//标题被点击时
        showMessage('点小图看大图，咿呀咿呀吆');
    });
    $('.tt22').mouseover(function () {
        showMessage('看看购房攻略，对你买房有好处哦');
    });
    $('.active-list').mouseover(function(){
        showMessage('点击查看更详细的内容，说不定你会喜欢哦！');
    });
    $('.head-logo').mouseover(function(){ 
        showMessage('点我返回首页哦！');
    });
    $('.current').mouseover(function(){
        showMessage('点我返回首页哦！');
    });
    $('.f14').mouseover(function () {
        showMessage('这里可以按照片区搜房子哦！');
    });
    $('.cellphone-night-con').mouseover(function () {
        showMessage('都是我们的战略合作伙伴哦，价格上也很有优势！');
    });
    $('.head-static').mouseover(function () {
        showMessage('专车接机、专车看房，都是免费的哦！');
    });
    $('#s').focus(function () {
        showMessage('输入你想搜索的关键词再按Enter(回车)键就可以搜索啦!');
    });
    $('#go-prev').mouseover(function () {
        showMessage('点它可以后退哦！');
    });
    $('#go-next').mouseover(function () {
        showMessage('点它可以前进哦！');
    });
    $('#refresh').mouseover(function () {
        showMessage('点它可以重新载入此页哦！');
    });
    $('#go-home').mouseover(function () {
        showMessage('点它就可以回到首页啦！');
    });
    $('#addfav').mouseover(function () {
        showMessage('点它可以把此页加入书签哦！');
    });
    $('#nav-two a').mouseover(function () {
        showMessage('嘘，从这里可以进入控制面板的哦！');
    });
    $('.post-category a').mouseover(function () {
        showMessage('点击查看此分类下得所有文章');
    });
    $('.post-heat a').mouseover(function () {
        showMessage('点它可以直接跳到评论列表处.');
    });
    $('#tho-shareto span a').mouseover(function () {
        showMessage('你知道吗?点它可以分享本文到'+$(this).attr('title'));
    });
    $('#switch-to-wap').mouseover(function(){
        showMessage('点击可以切换到手机版博客版面');
    });
});


//无聊讲点什么
jQuery(document).ready(function ($) {

    window.setInterval(function () {
        msgs = [$("#hitokoto").text(),weather.c[0],weather.c [2] ,weather.c [5] ,weather.c [7] ];
        var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i], 10000);
    }, 35000);
});

//无聊动动
jQuery(document).ready(function ($) {
    window.setInterval(function () {
        msgs = [$("#hitokoto").text()];
        //if(weather.state)msgs.concat(weather.c);
        var i = Math.floor(Math.random() * msgs.length);
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
            $(".spig").animate({
            left: document.body.offsetWidth/2*(1+s[i1]),
            top:  document.body.offsetheight/2*(1+s[i1])
        },
			{
			    duration: 2000,
			    complete: showMessage(msgs[i])
			});
    }, 45000);
});

//评论资料
jQuery(document).ready(function ($) {
    $("#author").click(function () {
        showMessage("留下你的尊姓大名！");
        $(".spig").animate({
            top: $("#author").offset().top - 70,
            left: $("#author").offset().left - 170
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
    $("#email").click(function () {
        showMessage("留下你的邮箱，不然就是无头像人士了！");
        $(".spig").animate({
            top: $("#email").offset().top - 70,
            left: $("#email").offset().left - 170
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
    $("#url").click(function () {

        showMessage("快快告诉我你的家在哪里，好让我去参观参观！");
        $(".spig").animate({
            top: $("#url").offset().top - 70,
            left: $("#url").offset().left - 170
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
    $("#comment").click(function () {
        showMessage("认真填写哦！不然会被认作垃圾评论的！我的乖乖~");
        $(".spig").animate({
            top: $("#comment").offset().top - 70,
            left: $("#comment").offset().left - 170
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
});

var spig_top = 50;
//滚动条移动
jQuery(document).ready(function ($) {
    var f = $(".spig").offset().top;
    $(window).scroll(function () {
        $(".spig").animate({
            top: $(window).scrollTop() + f +300
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
});

//鼠标点击时
jQuery(document).ready(function ($) {
    var stat_click = 0;
    $(".mumu").click(function () {
        if (!ismove) {
            stat_click++;
			if(stat_click<=4){
				msgs = [weather.c[0],weather.c [2] ,weather.c [5] ,weather.c [7] ];
			}else if (stat_click > 4) {
                msgs = ["你有完没完呀？", "你已经摸我" + stat_click + "次了", "非礼呀！救命！OH，My ladygaga"];
                var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            } else {
                msgs = ["筋斗云！~我飞！", "我跑呀跑呀跑！~~", "别摸我，大男人，有什么好摸的！", "惹不起你，我还躲不起你么？", "不要摸我了，我会告诉老婆来打你的！", "干嘛动我呀！小心我咬你！"];
                var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            }
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
            $(".spig").animate({
            left: document.body.offsetWidth/2*(1+s[i1]),
            top:  document.body.offsetheight/2*(1+s[i1])
            },
			{
			    duration: 500,
			    complete: showMessage(msgs[i])
			});
        } else {
            ismove = false;
        }
    });
});
//显示消息函数 
function showMessage(a, b) {
    if (b == null) b = 10000;
    jQuery("#message").hide().stop();
    jQuery("#message").html(a);
    jQuery("#message").fadeIn();
    jQuery("#message").fadeTo("1", 1);
    jQuery("#message").fadeOut(b);
};

//拖动
var _move = false;
var ismove = false; //移动标记
var _x, _y; //鼠标离控件左上角的相对位置
jQuery(document).ready(function ($) {
    $("#spig").mousedown(function (e) {
        _move = true;
        _x = e.pageX - parseInt($("#spig").css("left"));
        _y = e.pageY - parseInt($("#spig").css("top"));
     });
    $(document).mousemove(function (e) {
        if (_move) {
            var x = e.pageX - _x; 
            var y = e.pageY - _y;
            var wx = $(window).width() - $('#spig').width();
            var dy = $(document).height() - $('#spig').height();
            if(x >= 0 && x <= wx && y > 0 && y <= dy) {
                $("#spig").css({
                    top: y,
                    left: x
                }); //控件新位置
            ismove = true;
            }
        }
    }).mouseup(function () {
        _move = false;
    });
});

    //天气api
   function getCookie(name) {
var nameEQ = name + "=";
var ca = document.cookie.split(';');
for (var i = 0; i < ca.length; i++) {
var c = ca[i];
while (c.charAt(0) == ' ') c = c.substring(1, c.length);
if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
}
return null;
}
//读取cookie函数
function setCookie(name, value, days) {
if (days) {
var date = new Date();
date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
var expires = "; expires=" + date.toGMTString()
} else var expires = "";
document.cookie = name + "=" + value + expires + "; path=/"
}
//设置cookie函数
var weather=Array();
weather.s=false;
$(document).ready(function(){
var date = new Date();
weather.d = ""+date.getFullYear()+date.getMonth()+date.getDay();
weather.ck = getCookie("weather");
if(weather.ck==null||weather.d!=getCookie("wea_tstamp")){
$.ajax({
dataType:"jsonp",
success:function(data){
if(data.success!=1){return;}
weather.s=true;
weather.c=Array();
weather.c[0]="今天是"+data.result[0].days+"，"+data.result[0].week;
weather.c[1]=data.result[0].citynm+"今天"+data.result[0].temp_high+"°C到"+data.result[0].temp_low+"°C";
weather.c[2]=data.result[0].citynm+"今天"+data.result[0].weather;
weather.c[3]=data.result[0].citynm+"今天"+data.result[0].winp+"，"+data.result[0].wind;
weather.c[4]=data.result[0].citynm+"明天"+data.result[1].temp_high+"°C到"+data.result[1].temp_low+"°C";
weather.c[5]=data.result[0].citynm+"明天"+data.result[1].weather;
weather.c[6]=data.result[0].citynm+"后天"+data.result[2].temp_high+"°C到"+data.result[2].temp_low+"°C";
weather.c[7]=data.result[0].citynm+"后天"+data.result[2].weather;
setCookie("wea_tstamp",weather.d,1);
setCookie("weather",encodeURI(weather.c.join(",")),1);
},
type:"GET",
url:"http://api.myhloli.com/weather/?callback=?"
});
}
else{
weather.s = true;
weather.c = decodeURI(weather.ck).split(",");
}
});