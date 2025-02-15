var dashboardModule=angular.module('dashboardApp',[]);
dashboardModule.controller('dashboardController',['$compile','$scope',"$http", function dashboardController($compile, $scope,$http){
	var item_id=$scope.item_id;
	var token=$rootScope.token;
	
//	$http.get("http://oms.dotrmrt3.gov.ph/psilva/lnf_api/items/all/1?api_token="+token).then(function(response) {$scope.items  = response.data; });	


	$http.get("http://127.0.0.1/lnf_api/items/all/1?api_token="+token).then(function(response) {$scope.items  = response.data; });	





	$scope.retrieveItem=function (){

		var item_id=$scope.item_id;
		//$http.get("http://localhost/lnf_api/item/"+item_id+"/?api_token="+token).then(function(response) {$scope.items = response.data; });	
	
	};
	$scope.retrieveItemStatus=function (){
		
		var item_id=$scope.item_id;
		//$http.get("http://localhost/lnf_api/item/"+item_id+"/status/?api_token="+token").then(function(response) {$scope.items = response.requests;});	
	
	};

	
	$http.get("http://oms.dotrmrt3.gov.ph/psilva/lnf_api/requests/all/1/?api_token="+token).then(function(response) {$scope.requests = response.data; });	








	
	$scope.retrieveRequest=function (){
		
		var request_id=$scope.request_id;
		//$http.get("http://localhost/lnf_api/request/"+request_id+"/status/?api_token="+token").then(function(response) {$scope.requests = response.requests;});	
		
	};
	$scope.retrieveRequestStatus=function (){
		
		var item_id=$scope.request_id;
		//$http.get("http://localhost/lnf_api/request/"+request_id+"/status/?api_token="+token").then(function(response) {$scope.requests = response.requests;});	
	
	};
}]);

