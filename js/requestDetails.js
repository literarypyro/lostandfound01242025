var requestDetailsModule=angular.module('detailsApp',[]);
requestDetailsModule.controller("requestDetailsController",['$compile','$scope',"$http","$rootScope", function requestDetailsController($compile, $scope,$http,$rootScope){

	var item_id=$scope.item_id;
	var token=$rootScope.token;
	$http.get("http://oms.dotrmrt3.gov.ph/psilva/lnf_api/request/"+request_id+"/?api_token="+token).then(function(response) {$scope.requests = response.data; });	
		  
}]);

