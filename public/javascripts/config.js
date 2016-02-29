/**
 * 
 */
var WEBURL="http://www.vfhui.com/";
//var HTTPURL="http://www.vfhui.com:8080/management/";
//var WEBURL="http://192.168.11.105:3000/";
//var HTTPURL="http://192.168.11.105:9080/httpInterface/";
var HTTPURL="http://localhost:9080/httpInterface/";
var WEBMAP={
		buildingsdetail:WEBURL+"buildings/"
}
var URLMAP={
		citylist:HTTPURL+"jsondata/area/getSubAreaList",
		buildingslist:HTTPURL+"jsondata/buildings/getBuildingsDetailList",
	    notecelist:HTTPURL+"/jsondata/notice/getNoticeList",
	    noticedetail:HTTPURL+"/jsondata/notice/getNoticeList"
}