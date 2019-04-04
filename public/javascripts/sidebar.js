/**

 * Created by DL on 2016/10/20.

 */

$(function () {

    var body = $("body");

    var sideArea = $(".right-flow");

    var items = $(".sidebar").find(".s-item");

    var des = $(".des");

    items.each(function () {

        var that = $(this);

        var bgImg = that.find(".bg-img");

        var des = that.find(".des");

        that.hover(function () {

            if (!des.is(":animated")) {

                des.show(0).animate({'right': 38, 'opacity': 1}, 100);

                bgImg.addClass("hover");

            }

        }, function () {

            des.animate({'right': 48, 'opacity': 0}, 100).hide(100);

            bgImg.removeClass("hover");

        });

        that.on("click", function () {

            if (bgImg.hasClass("checked")) {//�жϵ�ǰ�Ƿ���ѡ��״̬

                bgImg.removeClass("checked");

            } else {

                $(".checked").removeClass("checked");

                bgImg.addClass("checked");

            }

            if (!that.hasClass("s-login") && !that.hasClass("s-look") && !that.hasClass("s-footprint")) {

                closeAll();//����޹ر�ǩ�ر����е���

            }

            des.animate({'right': 48, 'opacity': 0}, 100).hide(100);

        });

        if (des.is(":visible")) {

            bgImg.addClass("hover");

        }

    });

    /*��¼*/

    var loginDiv = $(".login");

    var loginItem = $(".s-login").find(".bg-img,.des");

    var loginDes = $(".s-login").find(".des");

    var closeBtn = loginDiv.find(".close");

    loginItem.on("click", function () {//�л���¼div����ʾ״̬��ͬʱ�ر��Ҳ໬��

        loginDes.hide();

        loginDiv.toggle(100);

        sideArea.animate({"right": -240}, 100);

    });

    closeBtn.on("click", function (e) {//����رհ�ť�ر�login��ͬʱ�Ƴ�ѡ��״̬

        loginItem.removeClass("checked");

        loginDiv.hide(100);

        e.stopPropagation()

    });

    /*�㼣*/

    var footDiv = $(".footprint");

    var myFoot = $(".s-footprint").find(".bg-img,.des");

    var closeFoot = footDiv.find(".close");

    myFoot.on("click", function () {

        fadeIO(footDiv, lookDiv);

    });

    closeFoot.on("click", function () {//����رհ�ť�ر��ҵ��㼣��ͬʱȥ��ѡ����ʽ

        sideArea.animate({"right": -240}, 100);

        myFoot.removeClass("checked");

    });

    /*ԤԼ����*/

    var lookDiv = $(".s-look-house");

    var myLook = $(".s-look").find(".bg-img,.des");

    myLook.on("click", function () {

        fadeIO(lookDiv, footDiv);

    });

    /*�հ�����*/

    $(document).click(function (e) {

        var _con = $(".right-flow");   // ����Ŀ������

        if (!_con.is(e.target) && _con.has(e.target).length === 0) {

            loginDiv.hide(100);

            loginItem.removeClass("checked");

            sideArea.animate({"right":-240},100);

            myFoot.removeClass("checked");

            myLook.removeClass("checked");

        }

    });

    /**

     * @param:i:Ҫ��ʾ��div��0��Ҫ���ص�div

     */

    function fadeIO(i, o) {

        if (sideArea.css("right") == "-240px") {

            sideArea.animate({"right": 0}, 100);

        } else if (sideArea.css("right") == "0px" && i.css("z-index") == 1) {

            sideArea.animate({"right": -240}, 100);

        }

        o.animate({"height": 0, "z-index": 0}, 300);

        i.animate({"z-index": 1, "height": "100%"}, 300);

        if (loginDiv.is(":visible")) {

            loginDiv.hide(100);

        }

    }

    //���top�ض���

    var goTop = $(".s-top").find(".bg-img,.des");

    goTop.on("click", function () {

        $('body,html').animate({scrollTop: 0}, "200");

        return false;

    });

    //�߶�����Ӧ

    var serviceList = lookDiv.find(".service-list");

    var houseList = footDiv.find(".house-list");

    var screenHeight = $(document.body).height();

    serviceList.css({

        height: screenHeight * 0.5

    });

    houseList.css({

        height: screenHeight * 0.66

    });

    //�ر�����

    function closeAll() {

        loginDiv.hide(100);

        sideArea.animate({"right": -240}, 100);

    }

});



$(".app-bottom").hide();  //�����������ʱ����ʾ


function app_show_hide() {

    var app_bottom = $(".app-bottom");

    var app_fixed = $(".app-fixed");

    var app_fixed_width = app_fixed.width();

    app_bottom.find(".closes").on("click",function () {

        app_bottom.animate({"left":"-100%"},1000,function () {

            app_fixed.animate({"left":"0"},500)

        });

    });

    app_fixed.on("click",function () {

        app_fixed.animate({"left":-app_fixed_width},500,function () {

            app_bottom.animate({"left":"0"},1000)

        });

    });

}

app_show_hide();
