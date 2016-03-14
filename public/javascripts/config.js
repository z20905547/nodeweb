/**
 * 
 */
var WEBURL="http://www.vfhui.com/";
var HTTPURL="http://www.vfhui.com:8080/management/";
//var WEBURL="http://localhost:3000/";
//var HTTPURL="http://localhost:9080/httpInterface/";
//var HTTPURL="http://localhost:9080/httpInterface/";
var WEBMAP={
		buildingsdetail:WEBURL+"buildings/"
}
var URLMAP={
		citylist:HTTPURL+"jsondata/area/getSubAreaList",
		buildingslist:HTTPURL+"jsondata/buildings/getBuildingsDetailList",
		notecelist:HTTPURL+"jsondata/notice/getNoticeList",
		noticedetail:HTTPURL+"jsondata/notice/getNoticeList",
		buildingsDetail:HTTPURL+"jsondata/buildings/getBuildingsDetail",
		resourceList:HTTPURL+"jsondata/resource/getResourceList"
}