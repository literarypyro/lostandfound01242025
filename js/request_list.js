var requestModule=angular.module('requestApp',[]);
requestModule.controller("requestController",['$compile', '$scope',"$http","$rootScope", function requestController($compile, $scope,$http,$rootScope){

	var request_id=$rootScope.user_id;
	var token=$rootScope.token;
	
	$http.get("http://localhost/lnf_api/requests/userRequests/"+request_id+"/?api_token="+token).then(function(response) {$scope.requests = response.requests;});	

	$scope.listUserRequests=function (){
		var request_id=$scope.request_id;
		$http.get("http://localhost/lnf_api/requests/userRequests/"+request_id+"/?api_token="+token).then(function(response) {$scope.requests = response.requests;});	
	
	};
	$scope.retrieveItem=function (){
		var request_id=$scope.request_id;
		$http.get("http://localhost/lnf_api/request/"+request_id+"/?api_token="+token).then(function(response) {$scope.requests = response.requests;});	
	};
	
	$scope.retrieveRequestStatus=function (){
		var request_id=$scope.request_id;
		$http.get("http://localhost/lnf_api/request/"+item_id+"/status/?api_token="+token).then(function(response) {$scope.requests = response.requests;});	
	};

}]);

