var requestModule=angular.module('requestApp');


requestModule.controller=controller("requestController",['$compile', '$scope',"$http", function requestController($compile, $scope,$http){
	$scope.listUserRequests=function (){
		var user_id=$scope.user_id;
		$http.get("http://localhost/lnf_api/requests/userRequests/"+user_id).then(function(response) {$scope.requests = response.requests;});	
	
	};
	$scope.retrieveItem=function (){
		
		var item_id=$scope.item_id;
		$http.get("http://localhost/lnf_api/request/"+item_id).then(function(response) {$scope.requests = response.requests;});	

	};
	
	$scope.retrieveRequestStatus=function (){
		
		var item_id=$scope.item_id;
		$http.get("http://localhost/lnf_api/request/"+item_id+"/status").then(function(response) {$scope.requests = response.requests;});	

	};


	$http.get("http://localhost/lnf_api/requests/userRequests/1").then(function(response) {$scope.requests = response.data; });	
		  
}]);

var detailsModule=angular.module('detailsApp');

detailsModule.controller=controller("detailsController",['$compile', '$scope',"$http", function requestController($compile, $scope,$http){

	$http.get("http://localhost/lnf_api/request/1").then(function(response) {$scope.requests = response.data; });	
		  
}]);
