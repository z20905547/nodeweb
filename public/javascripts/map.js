city_id = $(".haveSelM1").val();
active_price = $(".haveSelM2").val();
acreage = $(".haveSelM3").val();
shi = $(".haveSelM4").val();


$(document).ready(function () {

    params = {
        proId: proId,
        city_id: city_id,
        active_price: active_price,
        acreage: acreage,
        shi: shi
    }
    ajaxGet("get", URLMAP.findListByselect, params, function (data) {

        if (data.statusCode == "0000") {
            var obj = data;
            //alert("Data Loaded: " + obj.status);
            //先清空左侧buildingList
            listDate = obj.data;

            $("#buildingList").empty();
            $.each(listDate, function (i, n) {

                biaozhu(n);

            });


        } else {
            $(".bottom-pull-loading").html("数据测试");
            setTimeout(function () {
                $(".bottom-pull-loading").hide();
            }, 3000);
        }
        loading = false;
    });

    function biaozhu(n) {

        myRichMarker = new BMapLib.RichMarker('<p class="my_marker icon3" id="m' + n.id + '"><span>' + n.buildings_name + '&nbsp;' + n.active_price + '元/㎡</span></div></span></p>', new BMap.Point(n.map_x, n.map_y), {
            "anchor": new BMap.Size(-12, -38),
            "enableDragging": false
        });
        //标注点击事件
        myRichMarker.addEventListener("onclick", function (e) {
            //var price = getPrice(n.priceMin,n.priceAvg,n.priceMax);
            //var marker = new BMap.Marker(new BMap.Point(n.mapLng,n.mapLat));
            myInfo(n);

        });
        myRichMarker.addEventListener("onmouseover", function (e) {
            $("#m" + n.id).addClass("hover");
            $("#m" + n.id).parent("div").css("z-index", 99999);
        });
        myRichMarker.addEventListener("onmouseout", function (e) {
            //document.getElementById("rm3_image").src = "http://1.com/Public/images/icon.png";
            //alert(222);
            $("#m" + n.id).removeClass("hover");
            $("#m" + n.id).parent("div").css("z-index", 0);
        });

        map.addOverlay(myRichMarker);

    }

//弹出信息框
    function myInfo(n) {
        //changeCookie(n);
        var marker = new BMap.Marker(new BMap.Point(n.map_x, n.map_y));
        var sContent = '<div class="t_box"><div class="boxt"><h3 class="all366C"> <a target="_blank" href="/buildings/'+n.id+'/460000/'+n.ac_id+'/'+n.buildings_name+'">' + n.buildings_name + '</a></h3>&nbsp;<img src="../images/shou3.gif" width="49" height="19" /></div><div class="boxm"><div class="m1"><div class="txt"><ul><li><em>楼盘类型：</em>' + n.buildings_name + '</li><em>最新特价：</em><li>' + n.active_price + '元/平米</li><li><em>咨询热线：</em><i>' + n.server_phone_num + '</i></li><li><em>楼盘地址：</em> ' + n.address + '</li></ul></div></div></div>';
        //var opt = {
//	 offset:new BMap.Size(-5, -28),
//	};
        var opts = {
            offset: new BMap.Size(-5, -28)
        }
        var infoWindow = new BMap.InfoWindow(sContent, opts); // 创建信息窗口对象
        map.openInfoWindow(infoWindow, new BMap.Point(n.map_x, n.map_y)); // 打开信息窗口

    }
});

