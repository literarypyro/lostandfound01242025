var dbModule=angular.module('dbApp',[]);
dbModule.service('myService', function() {
  this.getHost=function(){
	return "http://localhost";  
  };
});

