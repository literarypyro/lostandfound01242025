
//var hostName="http://192.168.1.11/lnf_api_old/lnf_api/";
var hostName="http://10.20.5.11/lnf_api_old/lnf_api/";
var isBase="";

var dbModule=angular.module('dbApp',[]);
dbModule.service('myService', function() {
  this.getHost=function(){
	return "http://localhost";  
  };
});

