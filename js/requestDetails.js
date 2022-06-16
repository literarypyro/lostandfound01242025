var requestDetailsModule=angular.module('detailsApp',[]);
requestDetailsModule.controller("requestDetailsController",['$compile','$scope',"$http","$rootScope", function requestDetailsController($compile, $scope,$http,$rootScope){

	var item_id=$scope.item_id;
	var token=$rootScope.token;
	$http.get("http://192.168.1.163/lnf_api/request/"+request_id+"/?api_token="+token).then(function(response) {$scope.requests = response.data; });	
		  
}]);

