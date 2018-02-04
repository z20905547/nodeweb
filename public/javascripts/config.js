/**
 * 
 */
var WEBURL="http://www.vfhui.com/";
var HTTPURL="http://www.vfhui.com:8080/management/";
//var WEBURL="http://localhost:3000/";
//var HTTPURL="http://localhost:9080/httpInterface/";

var WEBMAP={
		buildingsdetail:WEBURL+"buildings/",
	    noticedetail:WEBURL+"news/",
	    orderdetail:WEBURL+"gy_customer/",
	    gy_buildingsdetail:WEBURL+"gy_buildings/"
}

var URLMAP={
		citylist:HTTPURL+"jsondata/area/getSubAreaList",
		buildingslist:HTTPURL+"jsondata/buildings/getBuildingsDetailList",
	    buildingslist2:HTTPURL+"jsondata/buildings/getBuildingsDetailList2",
	 //   buildingslist3:HTTPURL+"jsondata/buildings/getBuildingsDetailList3",
	    findListByselect:HTTPURL+"jsondata/buildings/findListByselect",
		notecelist:HTTPURL+"jsondata/notice/getNoticeList",
	    noticedetail:HTTPURL+"jsondata/notice/getNoticedetail",
		buildingsDetail:HTTPURL+"jsondata/buildings/getBuildingsDetail",
		resourceList:HTTPURL+"jsondata/resource/getResourceList",
	    demandorder:HTTPURL+"/jsondata/order/addOrder",

	//gongying
	gy_register:HTTPURL+"/jsondata/gongying/register",
	gy_login:HTTPURL+"/jsondata/gongying/login",
	gy_customer:HTTPURL+"/jsondata/gongying/customer",
	gy_customerById:HTTPURL+"/jsondata/gongying/customerById",
	gy_orderdetail:HTTPURL+"/jsondata/gongying/order",
	gy_addc:HTTPURL+"/jsondata/gongying/addc",
	gy_log:HTTPURL+"/jsondata/gongying/log",
	gy_roadlist:HTTPURL+"/jsondata/gongying/gy_roadlist",
	gy_roaddetail:HTTPURL+"/jsondata/gongying/getRoadDetail",
	gy_workerInfo:HTTPURL+"/jsondata/gongying/gy_workerInfo"
}