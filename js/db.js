
//var hostName="http://192.168.1.11/lnf_api_old/lnf_api/";
//var hostName="http://10.20.5.11/lnf_api_old/lnf_api/";
var hostName="http://localhost/lnf_api_old/lnf_api/";
var isBase="";
var user_id;
var dbModule=angular.module('dbApp',['ngCookies']);
dbModule.service('myService','$cookies', function($cookies) {
  this.getHost=function(){
	return "http://localhost";  
  };
});

